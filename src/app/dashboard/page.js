"use client";
import { Button, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!text1.trim() || !text2.trim()) {
      message.error("Please fill in both fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/banner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text1, text2 }),
      });

      if (response.ok) {
        message.success("Banner text updated successfully!");
        setText1(""); // Clear the input fields after successful submission
        setText2("");
        router.push(`/`);
      } else {
        message.error("Failed to update banner text.");
      }
    } catch (error) {
      message.error("An error occurred while updating the banner text.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Banner Text
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text 1
          </label>
          <Input
            placeholder="Enter text 1"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text 2
          </label>
          <Input
            placeholder="Enter text 2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="w-full"
          />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          loading={isSubmitting}
          disabled={!text1.trim() || !text2.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
        >
          {isSubmitting ? "Updating..." : "Update Banner"}
        </Button>
      </form>
    </div>
  );
}
