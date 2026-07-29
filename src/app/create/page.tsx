"use client";

import { useState } from "react";
import Header from "../_components/Header/Header";
import ActivityForm from "../_components/ActivityForm/ActivityForm";
import StyleSelector, {
  type ExaggerationStyle,
} from "../_components/StyleSelector/StyleSelector";
import styles from "./page.module.scss";

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState<"input" | "style">("input");
  const [name, setName] = useState("");
  const [activities, setActivities] = useState(["", "", ""]);
  const [selectedStyle, setSelectedStyle] = useState<ExaggerationStyle | null>(
    null,
  );

  const handleActivityFormComplete = (
    trimmedName: string,
    trimmedActivities: string[],
  ) => {
    setName(trimmedName);
    setActivities(trimmedActivities);
    setCurrentStep("style");
  };

  const handleGenerate = async () => {
    if (!selectedStyle) {
      return;
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        activities,
        style: selectedStyle,
      }),
    });

    const data = await response.json();

    console.log("서버가 반환한 데이터 : ", data);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        {currentStep === "input" ? (
          <ActivityForm
            name={name}
            activities={activities}
            onNameChange={setName}
            onActivitiesChange={setActivities}
            onComplete={handleActivityFormComplete}
          />
        ) : (
          <StyleSelector
            name={name}
            selectedStyle={selectedStyle}
            onSelect={setSelectedStyle}
            onBack={() => setCurrentStep("input")}
            onComplete={handleGenerate}
          />
        )}
      </main>
    </div>
  );
}
