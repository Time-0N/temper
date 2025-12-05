export interface TrainingPlan {
  id: string;
  name: string;
  duration_days: number;
  current_day: number;
  start_date: Date;
  is_active: boolean;
  created_at: Date;
}

export interface TrainingDay {
  id: string;
  plan_id: string;
  day_number: number;
  name: string;
  scheduled_day?: Date;
  status: 'pending' | 'completed' | 'skipped';
  completed_at?: Date;
}

export interface Exercise {
  id: string;
  training_day_id: string;
  name: string;
  target_sets: number;
  target_reps: number;
  rest_seconds?: number;
  notes?: string;
  order: number;
}

export interface CompletedSet {
  id: string;
  exercise_id: string;
  training_day_id: string;
  set_number: number;
  weight_kg: number;
  actual_reps: number;
  completed_at: Date;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface ProgressPhoto {
  id: string;
  photo_base64: string;
  taken_at: Date;
  training_day_id?: string;
  bodyweight_kg?: number;
  notes?: string;
}

