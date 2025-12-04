# Modul 335 - Temper

## Ziel
Temper ist eine Trainingsplan-App, welche es Nutzern erleichtern soll ihren Trainingsplan zu managen und umzusetzen.

Die App soll Sportlern helfen, ihre Trainingsroutine zu organisieren und motiviert zu bleiben, indem sie:
- Individuelle Trainingspläne erstellen und verwalten können
- Ihren Trainingsfortschritt visuell dokumentieren
- Regelmässig an ihre Workouts erinnert werden
- Ihre Trainingsdaten auch offline verfügbar haben

---

## Modul-Anforderungen


### Geräteschnittstellen

1. **Kamera** → Ermöglicht es Nutzern, Fortschrittsfotos (Before/After) aufzunehmen und zu speichern
2. **Benachrichtigungen** → Push-Notifications erinnern Nutzer an geplante Trainingseinheiten
3. **Lokale Datenspeicherung** → Trainingspläne und Übungen werden lokal gespeichert, damit die App offline voll funktionsfähig bleibt

### CRUD-Operationen mit Supabase

- **Create**: Trainingspläne können auf Supabase abgelegt werden
- **Read**: Trainingspläne auf Supabase können ausgelesen und dem Nutzer angezeigt werden
- **Update**: Trainingspläne auf Supabase können bearbeitet werden
- **Delete**: Die Trainingsplan-Einträge auf Supabase können wieder gelöscht werden

## User Stories

1. **Als Sportler** möchte ich einen neuen Trainingsplan erstellen können, damit ich meine Workouts strukturiert planen kann.

2. **Als Nutzer** möchte ich Fortschrittsfotos mit der Kamera aufnehmen können, damit ich meine körperliche Entwicklung visuell dokumentieren kann.

3. **Als Trainierender** möchte ich Push-Benachrichtigungen erhalten, damit ich an meine geplanten Trainingseinheiten erinnert werde.

4. **Als Nutzer** möchte ich meine Trainingspläne auch offline nutzen können, damit ich auch ohne Internetverbindung im Fitnessstudio trainieren kann.

5. **Als Sportler** möchte ich erledigte Trainingseinheiten abhaken können, damit ich meinen Fortschritt verfolgen kann.

## Lokales Datenbank-Modell (Ionic Storage / Dexie.js)

### Tabelle: **training_plans**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| id            | string        | Eindeutige ID (UUID lokal generiert)   |
| name          | string        | Name des Trainingsplans                |
| duration_days | number        | Länge des Plans in Tagen               |
| current_day   | number        | Aktueller Tag im Plan (1-X)            |
| start_date    | Date          | Startdatum des Plans                   |
| is_active     | boolean       | Ob der Plan aktuell aktiv ist          |
| created_at    | Date          | Erstellungsdatum                       |
| last_synced   | Date          | Letzte Synchronisation mit Supabase    |
| supabase_id   | string?       | ID auf Supabase (falls hochgeladen)    |

### Tabelle: **training_days**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| id            | string        | Eindeutige ID                          |
| plan_id       | string        | Referenz zu training_plans             |
| day_number    | number        | Tag-Nummer im Plan (1, 2, 3...)        |
| name          | string        | Name des Trainingstages (z.B. "Push")  |
| scheduled_date| Date?         | Geplantes Datum für diesen Tag         |
| status        | string        | 'pending', 'completed', 'skipped'      |
| completed_at  | Date?         | Wann wurde der Tag abgeschlossen       |

### Tabelle: **exercises**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| id            | string        | Eindeutige ID                          |
| training_day_id| string       | Referenz zu training_days              |
| name          | string        | Name der Übung                         |
| target_sets   | number        | Geplante Anzahl Sätze                  |
| target_reps   | number        | Geplante Wiederholungen                |
| rest_seconds  | number?       | Pausenzeit zwischen Sätzen (optional)  |
| notes         | string?       | Notizen zur Übung (optional)           |
| order         | number        | Reihenfolge im Trainingstag            |

### Tabelle: **completed_sets**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| id            | string        | Eindeutige ID                          |
| exercise_id   | string        | Referenz zu exercises                  |
| training_day_id| string       | Referenz zu training_days              |
| set_number    | number        | Satznummer (1, 2, 3...)                |
| weight_kg     | number        | Verwendetes Gewicht in kg              |
| actual_reps   | number        | Tatsächlich gemachte Wiederholungen    |
| completed_at  | Date          | Zeitpunkt der Ausführung               |
| difficulty    | string?       | 'easy', 'medium', 'hard' (optional)    |

### Tabelle: **progress_photos**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| id            | string        | Eindeutige ID                          |
| photo_base64  | string        | Base64-encoded Foto (lokal gespeichert)|
| taken_at      | Date          | Aufnahmezeitpunkt                      |
| training_day_id| string?      | Referenz zu training_days (optional)   |
| weight_kg     | number?       | Körpergewicht bei Aufnahme (optional)  |
| notes         | string?       | Optionale Notizen                      |

### Tabelle: **app_settings**
| Feld          | Typ           | Beschreibung                           |
|---------------|---------------|----------------------------------------|
| dark_mode     | boolean       | Dark Mode aktiviert                    |
| notifications_enabled | boolean | Push-Benachrichtigungen aktiviert     |
| reminder_time | string        | Uhrzeit für Erinnerungen (HH:MM)       |
| supabase_synced | boolean     | Mit Supabase verbunden                 |


---

