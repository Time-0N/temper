import { CompletedSet, Exercise, TrainingDay, TrainingPlan } from "./trainings-plan.model";

export const MOCK_TRAINING_PLANS: TrainingPlan[] = [
  {
    id: 'plan-1',
    name: 'Push Pull Legs',
    duration_days: 42,
    current_day: 12,
    start_date: new Date('2025-05-25'),
    is_active: true,
    created_at: new Date('2025-05-20'),
  },
  {
    id: 'plan-2',
    name: 'Upper Lower Split',
    duration_days: 28,
    current_day: 28,
    start_date: new Date('2025-04-01'),
    is_active: false,
    created_at: new Date('2025-03-28'),
  },
  {
    id: 'plan-3',
    name: 'Full Body 3x',
    duration_days: 21,
    current_day: 7,
    start_date: new Date('2025-05-30'),
    is_active: false,
    created_at: new Date('2025-05-29'),
  },
  {
    id: 'plan-4',
    name: 'Strength Block',
    duration_days: 56,
    current_day: 1,
    start_date: new Date('2025-06-06'),
    is_active: false,
    created_at: new Date('2025-06-05'),
  },
];

export const MOCK_TRAINING_DAYS: TrainingDay[] = [
  // Plan 1 - Push Pull Legs
  { id: 'day-1', plan_id: 'plan-1', day_number: 1, name: 'Push A', status: 'completed', completed_at: new Date('2025-05-25') },
  { id: 'day-2', plan_id: 'plan-1', day_number: 2, name: 'Pull A', status: 'completed', completed_at: new Date('2025-05-26') },
  { id: 'day-3', plan_id: 'plan-1', day_number: 3, name: 'Legs A', status: 'completed', completed_at: new Date('2025-05-27') },
  { id: 'day-4', plan_id: 'plan-1', day_number: 4, name: 'Rest', status: 'completed', completed_at: new Date('2025-05-28') },
  { id: 'day-5', plan_id: 'plan-1', day_number: 5, name: 'Push B', status: 'completed', completed_at: new Date('2025-05-29') },
  { id: 'day-6', plan_id: 'plan-1', day_number: 6, name: 'Pull B', status: 'skipped' },
  { id: 'day-7', plan_id: 'plan-1', day_number: 7, name: 'Legs B', status: 'completed', completed_at: new Date('2025-05-31') },
  { id: 'day-8', plan_id: 'plan-1', day_number: 8, name: 'Rest', status: 'completed', completed_at: new Date('2025-06-01') },
  { id: 'day-9', plan_id: 'plan-1', day_number: 9, name: 'Push A', status: 'completed', completed_at: new Date('2025-06-02') },
  { id: 'day-10', plan_id: 'plan-1', day_number: 10, name: 'Pull A', status: 'completed', completed_at: new Date('2025-06-03') },
  { id: 'day-11', plan_id: 'plan-1', day_number: 11, name: 'Legs A', status: 'completed', completed_at: new Date('2025-06-04') },
  { id: 'day-12', plan_id: 'plan-1', day_number: 12, name: 'Rest', status: 'pending', scheduled_day: new Date('2025-06-06') },
  { id: 'day-13', plan_id: 'plan-1', day_number: 13, name: 'Push B', status: 'pending', scheduled_day: new Date('2025-06-07') },
  { id: 'day-14', plan_id: 'plan-1', day_number: 14, name: 'Pull B', status: 'pending', scheduled_day: new Date('2025-06-08') },
];

export const MOCK_EXERCISES: Exercise[] = [
  // Push A (day-1)
  { id: 'ex-1', training_day_id: 'day-1', name: 'Bench Press', target_sets: 4, target_reps: 8, rest_seconds: 120, order: 1 },
  { id: 'ex-2', training_day_id: 'day-1', name: 'Overhead Press', target_sets: 3, target_reps: 10, rest_seconds: 90, order: 2 },
  { id: 'ex-3', training_day_id: 'day-1', name: 'Incline Dumbbell Press', target_sets: 3, target_reps: 12, rest_seconds: 90, order: 3 },
  { id: 'ex-4', training_day_id: 'day-1', name: 'Tricep Pushdowns', target_sets: 3, target_reps: 15, rest_seconds: 60, order: 4 },
  { id: 'ex-5', training_day_id: 'day-1', name: 'Lateral Raises', target_sets: 3, target_reps: 15, rest_seconds: 60, order: 5 },

  // Pull A (day-2)
  { id: 'ex-6', training_day_id: 'day-2', name: 'Deadlift', target_sets: 4, target_reps: 6, rest_seconds: 180, order: 1, notes: 'Focus on form' },
  { id: 'ex-7', training_day_id: 'day-2', name: 'Pull-ups', target_sets: 4, target_reps: 8, rest_seconds: 120, order: 2 },
  { id: 'ex-8', training_day_id: 'day-2', name: 'Barbell Rows', target_sets: 3, target_reps: 10, rest_seconds: 90, order: 3 },
  { id: 'ex-9', training_day_id: 'day-2', name: 'Face Pulls', target_sets: 3, target_reps: 15, rest_seconds: 60, order: 4 },
  { id: 'ex-10', training_day_id: 'day-2', name: 'Bicep Curls', target_sets: 3, target_reps: 12, rest_seconds: 60, order: 5 },

  // Legs A (day-3)
  { id: 'ex-11', training_day_id: 'day-3', name: 'Squats', target_sets: 4, target_reps: 8, rest_seconds: 180, order: 1 },
  { id: 'ex-12', training_day_id: 'day-3', name: 'Romanian Deadlift', target_sets: 3, target_reps: 10, rest_seconds: 120, order: 2 },
  { id: 'ex-13', training_day_id: 'day-3', name: 'Leg Press', target_sets: 3, target_reps: 12, rest_seconds: 90, order: 3 },
  { id: 'ex-14', training_day_id: 'day-3', name: 'Leg Curls', target_sets: 3, target_reps: 12, rest_seconds: 60, order: 4 },
  { id: 'ex-15', training_day_id: 'day-3', name: 'Calf Raises', target_sets: 4, target_reps: 15, rest_seconds: 60, order: 5 },
];

export const MOCK_COMPLETED_SETS: CompletedSet[] = [
  // Bench Press (ex-1)
  { id: 'set-1', exercise_id: 'ex-1', training_day_id: 'day-1', set_number: 1, weight_kg: 80, actual_reps: 8, completed_at: new Date('2025-05-25T09:00:00'), difficulty: 'medium' },
  { id: 'set-2', exercise_id: 'ex-1', training_day_id: 'day-1', set_number: 2, weight_kg: 80, actual_reps: 8, completed_at: new Date('2025-05-25T09:03:00'), difficulty: 'medium' },
  { id: 'set-3', exercise_id: 'ex-1', training_day_id: 'day-1', set_number: 3, weight_kg: 80, actual_reps: 7, completed_at: new Date('2025-05-25T09:06:00'), difficulty: 'hard' },
  { id: 'set-4', exercise_id: 'ex-1', training_day_id: 'day-1', set_number: 4, weight_kg: 75, actual_reps: 8, completed_at: new Date('2025-05-25T09:09:00'), difficulty: 'hard' },

  // Overhead Press (ex-2)
  { id: 'set-5', exercise_id: 'ex-2', training_day_id: 'day-1', set_number: 1, weight_kg: 50, actual_reps: 10, completed_at: new Date('2025-05-25T09:15:00'), difficulty: 'easy' },
  { id: 'set-6', exercise_id: 'ex-2', training_day_id: 'day-1', set_number: 2, weight_kg: 50, actual_reps: 10, completed_at: new Date('2025-05-25T09:17:00'), difficulty: 'medium' },
  { id: 'set-7', exercise_id: 'ex-2', training_day_id: 'day-1', set_number: 3, weight_kg: 50, actual_reps: 9, completed_at: new Date('2025-05-25T09:19:00'), difficulty: 'hard' },

  // Deadlift (ex-6)
  { id: 'set-8', exercise_id: 'ex-6', training_day_id: 'day-2', set_number: 1, weight_kg: 120, actual_reps: 6, completed_at: new Date('2025-05-26T10:00:00'), difficulty: 'medium' },
  { id: 'set-9', exercise_id: 'ex-6', training_day_id: 'day-2', set_number: 2, weight_kg: 120, actual_reps: 6, completed_at: new Date('2025-05-26T10:04:00'), difficulty: 'medium' },
  { id: 'set-10', exercise_id: 'ex-6', training_day_id: 'day-2', set_number: 3, weight_kg: 125, actual_reps: 5, completed_at: new Date('2025-05-26T10:08:00'), difficulty: 'hard' },
  { id: 'set-11', exercise_id: 'ex-6', training_day_id: 'day-2', set_number: 4, weight_kg: 125, actual_reps: 4, completed_at: new Date('2025-05-26T10:12:00'), difficulty: 'hard' },

  // Squats (ex-11)
  { id: 'set-12', exercise_id: 'ex-11', training_day_id: 'day-3', set_number: 1, weight_kg: 100, actual_reps: 8, completed_at: new Date('2025-05-27T08:30:00'), difficulty: 'medium' },
  { id: 'set-13', exercise_id: 'ex-11', training_day_id: 'day-3', set_number: 2, weight_kg: 100, actual_reps: 8, completed_at: new Date('2025-05-27T08:34:00'), difficulty: 'medium' },
  { id: 'set-14', exercise_id: 'ex-11', training_day_id: 'day-3', set_number: 3, weight_kg: 105, actual_reps: 7, completed_at: new Date('2025-05-27T08:38:00'), difficulty: 'hard' },
  { id: 'set-15', exercise_id: 'ex-11', training_day_id: 'day-3', set_number: 4, weight_kg: 105, actual_reps: 6, completed_at: new Date('2025-05-27T08:42:00'), difficulty: 'hard' },
];
