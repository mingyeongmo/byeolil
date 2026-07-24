"use client";

import { FormEvent, useState } from "react";
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
      activities: trimmedActivities.map((activity) =>
        activity ? "" : "오늘 있었던 일을 입력해 주세요.",
      ),
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
    <>
      <p>별일 없던 오늘도, 쓸데 없이 거창하게.</p>
      <p>오늘 있었던 일을 들려주세요.</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          placeholder="이름을 입력해 주세요"
          maxLength={20}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.errorMessage}>
            {errors.name}
          </p>
        )}

        {activities.map((activity, index) => (
          <div key={index}>
            <label htmlFor={`activity-${index}`}>오늘 있었던 일</label>
            <input
              id={`activity-${index}`}
              value={activity}
              placeholder="예 : 점심으로 김치찌개를 먹었다"
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
                type="button"
                onClick={() => handleRemoveActivity(index)}
                aria-label={`오늘 있었던 일 ${index + 1} 삭제`}
              >
                X
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddActivity}>
          추가
        </button>
        <button type="submit">과장 스타일 고르러 가기</button>
      </form>

      <p>오늘 있었던 일 3개 정도만 말</p>
    </>
  );
}
