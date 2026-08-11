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
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");

  const handleActivityFormComplete = (
    trimmedName: string,
    trimmedActivities: string[],
  ) => {
    setName(trimmedName);
    setActivities(trimmedActivities);
    setCurrentStep("style");
  };

  const handleGenerate = async () => {
    if (!selectedStyle || isGenerating) {
      return;
    }

    setIsGenerating(true);
    setGenerateError("");

    try {
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
        setGenerateError(data.message ?? "결과 생성에 실패했습니다.");
        return;
      }

      if (typeof data.id !== "string") {
        setGenerateError("결과 주소를 만들지 못했습니다.");
        return;
      }

      router.push(`/result/${data.id}`);
    } catch {
      setGenerateError("서버에 연결하지 못했습니다. 다시 시도해 주세요.");
    } finally {
      setIsGenerating(false);
    }
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
            selectedStyle={selectedStyle}
            onSelect={setSelectedStyle}
            onBack={() => setCurrentStep("input")}
            onComplete={handleGenerate}
            isGenerating={isGenerating}
          />
        )}

        {generateError && (
          <p className={styles.generateError} role="alert">
            {generateError}
          </p>
        )}
      </main>
    </div>
  );
}
