// database.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompletedSet, Exercise, ProgressPhoto, TrainingDay, TrainingPlan } from '../models/trainings-plan.model';
import { MOCK_TRAINING_PLANS, MOCK_TRAINING_DAYS, MOCK_EXERCISES, MOCK_COMPLETED_SETS } from '../models/mock-trainings-plan.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _storage: Storage | null = null;
  private initPromise: Promise<void>;

  private plans$ = new BehaviorSubject<TrainingPlan[]>([]);
  private activePlan$ = new BehaviorSubject<TrainingPlan | null>(null);

  constructor(private storage: Storage) {
    this.initPromise = this.init();
  }

  private async init(): Promise<void> {
    this._storage = await this.storage.create();
  }

  private async getStorage(): Promise<Storage> {
    await this.initPromise;
    return this._storage!;
  }

  async initialize(useMockData = false): Promise<void> {
    if (useMockData) {
      await this.seedMockData();
    }
    await this.refreshPlans();
  }

  private async seedMockData(): Promise<void> {
    const storage = await this.getStorage();
    const existing = (await storage.get('training_plans')) || [];
    if (existing.length > 0) return;

    await storage.set('training_plans', MOCK_TRAINING_PLANS);
    await storage.set('training_days', MOCK_TRAINING_DAYS);
    await storage.set('exercises', MOCK_EXERCISES);
    await storage.set('completed_sets', MOCK_COMPLETED_SETS);
  }

  private async refreshPlans(): Promise<void> {
    const storage = await this.getStorage();
    const plans = (await storage.get('training_plans')) || [];
    this.plans$.next(plans);
    this.activePlan$.next(plans.find((p: TrainingPlan) => p.is_active) || null);
  }

  // Reactive getters
  getPlans(): Observable<TrainingPlan[]> {
    return this.plans$.asObservable();
  }

  getActivePlan(): Observable<TrainingPlan | null> {
    return this.activePlan$.asObservable();
  }

  // Plans
  async savePlan(plan: TrainingPlan): Promise<void> {
    const storage = await this.getStorage();
    const plans = [...this.plans$.value, plan];
    await storage.set('training_plans', plans);
    this.plans$.next(plans);
  }

  async updatePlan(plan: TrainingPlan): Promise<void> {
    const storage = await this.getStorage();
    const plans = this.plans$.value.map(p => p.id === plan.id ? plan : p);
    await storage.set('training_plans', plans);
    this.plans$.next(plans);

    if (plan.is_active) {
      this.activePlan$.next(plan);
    } else if (this.activePlan$.value?.id === plan.id) {
      this.activePlan$.next(null);
    }
  }

  async deletePlan(id: string): Promise<void> {
    const storage = await this.getStorage();
    const plans = this.plans$.value.filter(p => p.id !== id);
    await storage.set('training_plans', plans);
    this.plans$.next(plans);

    if (this.activePlan$.value?.id === id) {
      this.activePlan$.next(null);
    }
  }

  async setActivePlan(planId: string): Promise<void> {
    const storage = await this.getStorage();
    const plans = this.plans$.value.map(p => ({
      ...p,
      is_active: p.id === planId
    }));
    await storage.set('training_plans', plans);
    this.plans$.next(plans);
    this.activePlan$.next(plans.find(p => p.id === planId) || null);
  }

  // Days
  async getDaysByPlan(planId: string): Promise<TrainingDay[]> {
    const storage = await this.getStorage();
    const days = (await storage.get('training_days')) || [];
    return days.filter((d: TrainingDay) => d.plan_id === planId);
  }

  async saveDay(day: TrainingDay): Promise<void> {
    const storage = await this.getStorage();
    const days = (await storage.get('training_days')) || [];
    days.push(day);
    await storage.set('training_days', days);
  }

  // Exercises
  async getExercisesByDay(dayId: string): Promise<Exercise[]> {
    const storage = await this.getStorage();
    const exercises = (await storage.get('exercises')) || [];
    return exercises.filter((e: Exercise) => e.training_day_id === dayId);
  }

  async saveExercise(exercise: Exercise): Promise<void> {
    const storage = await this.getStorage();
    const exercises = (await storage.get('exercises')) || [];
    exercises.push(exercise);
    await storage.set('exercises', exercises);
  }

  // Completed Sets
  async getCompletedSets(exerciseId: string): Promise<CompletedSet[]> {
    const storage = await this.getStorage();
    const sets = (await storage.get('completed_sets')) || [];
    return sets.filter((s: CompletedSet) => s.exercise_id === exerciseId);
  }

  async saveCompletedSet(set: CompletedSet): Promise<void> {
    const storage = await this.getStorage();
    const sets = (await storage.get('completed_sets')) || [];
    sets.push(set);
    await storage.set('completed_sets', sets);
  }

  // Photos
  async getPhotos(): Promise<ProgressPhoto[]> {
    const storage = await this.getStorage();
    return (await storage.get('progress_photos')) || [];
  }

  async savePhoto(photo: ProgressPhoto): Promise<void> {
    const storage = await this.getStorage();
    const photos = (await storage.get('progress_photos')) || [];
    photos.push(photo);
    await storage.set('progress_photos', photos);
  }
}
