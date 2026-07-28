"use client";

import { useState } from "react";
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

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>별일있음</h1>
          <span>{currentStep === "input" ? "1 / 3" : "2 / 3"}</span>
        </header>

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
          />
        )}
      </main>
    </div>
  );
}
