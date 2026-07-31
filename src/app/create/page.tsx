"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../_components/Header/Header";
import ActivityForm from "../_components/ActivityForm/ActivityForm";
import StyleSelector, {
  type ExaggerationStyle,
} from "../_components/StyleSelector/StyleSelector";
import styles from "./page.module.scss";

export default function CreatePage() {
  const router = useRouter();

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

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    sessionStorage.setItem(
      "byeolil-result",
      JSON.stringify({
        name,
        activities,
        style: selectedStyle,
        result: data.result,
      }),
    );

    router.push("/result");
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
