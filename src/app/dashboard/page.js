"use client";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [deadline, setDeadline] = useState(null);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isSubmittingDeadline, setIsSubmittingDeadline] = useState(false);
  const [isSubmittingText, setIsSubmittingText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/session");
      const data = await res.json();
      if (!data.success) {
        router.push("/login");
      }
    };
    checkSession();
  }, [router]);

  // Fetch Deadline & Banner Text
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deadlineRes = await fetch("/api/deadline");
        const deadlineData = await deadlineRes.json();
        if (deadlineData?.deadline) {
          setDeadline(new Date(deadlineData.deadline));
        }
        const bannerRes = await fetch("/api/banner");
        const bannerData = await bannerRes.json();
        if (bannerData?.text1 && bannerData?.text2) {
          setText1(bannerData.text1);
          setText2(bannerData.text2);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle Deadline Submit
  const handleDeadlineSubmit = async (values) => {
    setIsSubmittingDeadline(true);
    try {
      const response = await fetch("/api/deadline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        setDeadline(new Date(data.deadline));
        message.success("Deadline updated successfully!");
      } else {
        message.error("Failed to update deadline.");
      }
    } catch (error) {
      message.error("An error occurred while updating the deadline.");
    } finally {
      setIsSubmittingDeadline(false);
    }
  };

  // Handle Banner Text Submit
  const handleTextSubmit = async () => {
    setIsSubmittingText(true);
    try {
      const response = await fetch("/api/banner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text1, text2 }),
      });

      if (response.ok) {
        message.success("Banner text updated successfully!");
      } else {
        message.error("Failed to update banner text.");
      }
    } catch (error) {
      message.error("An error occurred while updating the banner text.");
    } finally {
      setIsSubmittingText(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    message.success("Logged out successfully.");
    router.push("/login");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Logout Button */}
      <div className="flex justify-end mb-4">
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Forms Container - Side by Side Layout */}
      <div className="flex justify-center items-start gap-8">
        {/* Countdown Timer Form */}
        <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Set Countdown Timer</h2>
          <Form layout="vertical" onFinish={handleDeadlineSubmit}>
            <Form.Item label="Days" name="days" initialValue={0}>
              <Input type="number" min={0} />
            </Form.Item>
            <Form.Item label="Hours" name="hours" initialValue={0}>
              <Input type="number" min={0} />
            </Form.Item>
            <Form.Item label="Minutes" name="minutes" initialValue={0}>
              <Input type="number" min={0} />
            </Form.Item>
            <Form.Item label="Seconds" name="seconds" initialValue={0}>
              <Input type="number" min={0} />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmittingDeadline}
              className="w-full"
            >
              {isSubmittingDeadline ? "Updating..." : "Set Deadline"}
            </Button>
          </Form>

          {deadline && (
            <p className="mt-4 text-center">
              Current Deadline: {deadline.toLocaleString()}
            </p>
          )}
        </div>

        {/* Banner Text Form */}
        <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Update Banner Text</h2>
          <Form layout="vertical" onFinish={handleTextSubmit}>
            <Form.Item label="Text 1">
              <Input
                placeholder="Text one"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Text 2">
              <Input
                placeholder="Text two"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmittingText}
              disabled={!text1.trim() || !text2.trim()}
              className="w-full"
            >
              {isSubmittingText ? "Updating..." : "Update Banner"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
