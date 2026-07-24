"use client";

import { useState } from "react";
import styles from "./page.module.scss";

const MIN_ACTIVITIES = 3;

export default function Home() {
  const [name, setName] = useState("");
  const [activities, setActivities] = useState(["", "", ""]);

  const handleActivityChange = (index: number, value: string) => {
    const nextActivities = [...activities];
    nextActivities[index] = value;
    setActivities(nextActivities);
  };

  const handleAddActivity = () => {
    setActivities((prevActivities) => [...prevActivities, ""]);
  };

  const handleRemoveActivity = (indexToRemove: number) => {
    if (activities.length <= MIN_ACTIVITIES) {
      return;
    }

    setActivities(activities.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>별일있음</h1>
        <p>별일 없던 오늘도, 쓸데 없이 거창하게.</p>
        <p>오늘 있었던 일을 들려주세요.</p>
        <form className={styles.form}>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해 주세요"
            maxLength={20}
          />

          {activities.map((activity, index) => (
            <div key={index}>
              <label htmlFor={`activity-${index}`}>오늘 있었던 일</label>
              <input
                id={`activity-${index}`}
                value={activity}
                placeholder="예 : 점심으로 김치찌개를 먹었다"
                maxLength={50}
                onChange={(e) => handleActivityChange(index, e.target.value)}
              />
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
        </form>
      </main>
    </div>
  );
}
