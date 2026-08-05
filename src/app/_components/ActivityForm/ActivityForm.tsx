"use client";

import { FormEvent, useState } from "react";
import { isMeaningfulActivity } from "@/lib/activityValidation";
import styles from "./ActivityForm.module.scss";

const MIN_ACTIVITIES = 3;

type FormErrors = {
  name: string;
  activities: string[];
};

type ActivityFormProps = {
  name: string;
  activities: string[];
  onNameChange: (name: string) => void;
  onActivitiesChange: (activities: string[]) => void;
  onComplete: (name: string, activities: string[]) => void;
};

export default function ActivityForm({
  name,
  activities,
  onNameChange,
  onActivitiesChange,
  onComplete,
}: ActivityFormProps) {
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    activities: activities.map(() => ""),
  });

  const handleNameChange = (value: string) => {
    onNameChange(value);

    if (errors.name) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        name: "",
      }));
    }
  };

  const handleActivityChange = (index: number, value: string) => {
    const nextActivities = [...activities];
    nextActivities[index] = value;
    onActivitiesChange(nextActivities);

    if (errors.activities[index]) {
      const nextActivityErrors = [...errors.activities];
      nextActivityErrors[index] = "";
      setErrors((previousErrors) => ({
        ...previousErrors,
        activities: nextActivityErrors,
      }));
    }
  };

  const handleAddActivity = () => {
    onActivitiesChange([...activities, ""]);
    setErrors((previousErrors) => ({
      ...previousErrors,
      activities: [...previousErrors.activities, ""],
    }));
  };

  const handleRemoveActivity = (indexToRemove: number) => {
    if (activities.length <= MIN_ACTIVITIES) {
      return;
    }

    onActivitiesChange(
      activities.filter((_, index) => index !== indexToRemove),
    );
    setErrors((previousErrors) => ({
      ...previousErrors,
      activities: previousErrors.activities.filter(
        (_, index) => index !== indexToRemove,
      ),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedActivities = activities.map((activity) => activity.trim());
    const nextErrors: FormErrors = {
      name: trimmedName ? "" : "이름을 입력해 주세요.",
      activities: trimmedActivities.map((activity) => {
        if (!activity) {
          return "오늘 있었던 일을 입력해 주세요.";
        }

        if (!isMeaningfulActivity(activity)) {
          return "오늘 한 일을 조금 더 구체적으로 입력해 주세요.";
        }

        return "";
      }),
    };
    const hasError =
      Boolean(nextErrors.name) ||
      nextErrors.activities.some((activityError) => activityError);

    setErrors(nextErrors);

    if (hasError) {
      return;
    }

    onComplete(trimmedName, trimmedActivities);
  };

  return (
    <section className={styles.activityStep}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>STEP 1 · 오늘의 기록</span>
        <h2>
          오늘 무슨 일이
          <br />
          있었나요?
        </h2>
        <p>
          대단한 일이 아니어도 괜찮아요.
          <br />
          사소할수록 더 거창하게 만들어 드릴게요.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.nameField}>
          <label htmlFor="name">어떻게 불러드릴까요?</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
            placeholder="이름 또는 별명"
            maxLength={20}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className={styles.errorMessage}>
              {errors.name}
            </p>
          )}
        </div>

        <fieldset className={styles.activitiesField}>
          <legend>오늘 있었던 일을 적어주세요</legend>
          <p className={styles.fieldHint}>짧은 문장으로 편하게 적으면 돼요.</p>

          <div className={styles.activityList}>
            {activities.map((activity, index) => (
              <div className={styles.activityItem} key={index}>
                <label htmlFor={`activity-${index}`}>
                  <span>{index + 1}</span>
                  오늘의 일
                </label>
                <input
                  id={`activity-${index}`}
                  value={activity}
                  placeholder={
                    index === 0
                      ? "예: 점심으로 김치찌개를 먹었다"
                      : "오늘 있었던 일을 입력해 주세요"
                  }
                  maxLength={50}
                  onChange={(event) =>
                    handleActivityChange(index, event.target.value)
                  }
                  aria-invalid={Boolean(errors.activities[index])}
                  aria-describedby={
                    errors.activities[index]
                      ? `activity-${index}-error`
                      : undefined
                  }
                />
                {errors.activities[index] && (
                  <p
                    id={`activity-${index}-error`}
                    className={styles.errorMessage}
                  >
                    {errors.activities[index]}
                  </p>
                )}
                {activities.length > MIN_ACTIVITIES && (
                  <button
                    className={styles.removeButton}
                    type="button"
                    onClick={() => handleRemoveActivity(index)}
                    aria-label={`오늘 있었던 일 ${index + 1} 삭제`}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            className={styles.addButton}
            type="button"
            onClick={handleAddActivity}
          >
            <span aria-hidden="true">＋</span>
            오늘의 일 더 추가하기
          </button>
        </fieldset>

        <button className={styles.submitButton} type="submit">
          과장 스타일 고르기
          <span aria-hidden="true">→</span>
        </button>
      </form>

      <p className={styles.bottomHint}>
        입력한 내용은 결과를 만드는 데만 사용해요.
      </p>
    </section>
  );
}
