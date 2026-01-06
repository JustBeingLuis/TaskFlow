import { useState } from "react";
import ModalHeader from "./TaskModal/ModalHeader";
import ManualTaskForm from "./TaskModal/ManualTaskForm";
import AITaskForm from "./TaskModal/AITaskForm";

function TaskModal({
  isOpen,
  onClose,
  onCreateTask,
  onCreateTasksWithAI,
  aiLoading,
}) {
  const [activeTab, setActiveTab] = useState("manual");

  const handleManualSubmit = async (taskData) => {
    await onCreateTask(taskData);
    onClose();
  };

  const handleAISubmit = async (input) => {
    await onCreateTasksWithAI(input);
    onClose();
  };

  const handleClose = () => {
    setActiveTab("manual");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden transform transition-all animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onClose={handleClose}
        />

        <div className="p-8">
          {activeTab === "manual" && (
            <ManualTaskForm
              onSubmit={handleManualSubmit}
              onCancel={handleClose}
            />
          )}

          {activeTab === "ai" && (
            <AITaskForm
              onSubmit={handleAISubmit}
              onCancel={handleClose}
              isLoading={aiLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
