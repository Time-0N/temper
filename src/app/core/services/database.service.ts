import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CompletedSet, Exercise, ProgressPhoto, TrainingDay, TrainingPlan } from '../models/trainings-plan.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async getPlans(): Promise<TrainingPlan[]> {
    return await this._storage?.get('training_plans') || [];
  }

  async savePlan(plan: TrainingPlan): Promise<void> {
    const plans = await this.getPlans();
    plans.push(plan);
    await this._storage?.set('training_plans', plans);
  }

  async updatePlan(plan: TrainingPlan): Promise<void> {
    const plans = await this.getPlans();
    const index = plans.findIndex(p => p.id === plan.id);
    if (index !== -1) {
      plans[index] = plan;
      await this._storage?.set('training_plans', plans);
    }
  }

  async deletePlan(id: string): Promise<void> {
    const plans = await this.getPlans();
    const filtered = plans.filter(p => p.id !== id);
    await this._storage?.set('training_plans', filtered);
  }

  async getDays(): Promise<TrainingDay[]> {
    return await this._storage?.get('training_days') || [];
  }

  async getDaysByPlan(planId: string): Promise<TrainingDay[]> {
    const days = await this.getDays();
    return days.filter(d => d.plan_id === planId);
  }

  async saveDay(day: TrainingDay): Promise<void> {
    const days = await this.getDays();
    days.push(day);
    await this._storage?.set('training_days', days);
  }

  async getExercises(): Promise<Exercise[]> {
    return await this._storage?.get('exercises') || [];
  }

  async getExercisesByDay(dayId: string): Promise<Exercise[]> {
    const exercises = await this.getExercises();
    return exercises.filter(e => e.training_day_id === dayId);
  }

  async saveExercise(exercise: Exercise): Promise<void> {
    const exercises = await this.getExercises();
    exercises.push(exercise);
    await this._storage?.set('exercises', exercises);
  }

  async getCompletedSets(): Promise<CompletedSet[]> {
    return await this._storage?.get('completed_sets') || [];
  }

  async saveCompletedSet(set: CompletedSet): Promise<void> {
    const sets = await this.getCompletedSets();
    sets.push(set);
    await this._storage?.set('completed_sets', set);
  }

  async getPhotos(): Promise<ProgressPhoto[]> {
    return await this._storage?.get('progress_photos') || [];
  }

  async savePhoto(photo: ProgressPhoto): Promise<void> {
    const photos = await this.getPhotos();
    photos.push(photo);
    await this._storage?.set('progress_photos', photos);
  }

}

