"use client";

import { useState } from "react";
import ActivityForm from "../_components/ActivityForm/ActivityForm";
import Header from "../_components/Header/Header";
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
          />
        )}
      </main>
    </div>
  );
}
