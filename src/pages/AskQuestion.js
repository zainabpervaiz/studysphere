import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useQuestions } from "../QuestionContext"; // ✅ import context

function AskQuestion() {
  const { questions, setQuestions } = useQuestions(); // ✅ shared state from context

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [newComment, setNewComment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedId, setHighlightedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionTitle.trim()) return;

    const newQuestion = {
      id: Date.now(),
      title: questionTitle,
      body: questionBody,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
      likes: 0,
      comments: [],
    };

    setQuestions([newQuestion, ...questions]);
    setHighlightedId(newQuestion.id);

    setTimeout(() => {
      setHighlightedId(null);
    }, 5000); // highlight for 5 sec

    setQuestionTitle("");
    setQuestionBody("");
    setCategory("");
    setTags("");
  };

  const handleLike = (id) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
  };

  const handleAddComment = (id, comment) => {
    if (!comment.trim()) return;
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, comments: [...q.comments, comment] } : q
      )
    );
  };

  const filteredQuestions = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", background: "#f9fafb" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#e8f0fe",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>📚 Subjects</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"].map((subj) => (
            <li
              key={subj}
              style={{
                padding: "8px",
                borderBottom: "1px solid #d6d6d6",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#dce6f8")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {subj}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Search Bar */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "8px",
            padding: "8px 12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <i className="fas fa-search" style={{ color: "#999", marginRight: "8px" }}></i>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "transparent",
            }}
          />
        </div>

        <h2 style={{ marginBottom: "20px" }}>📝 Ask a Question</h2>

        {/* Question Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <input
            type="text"
            placeholder="Enter question title"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="">Select a category</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>

          <input
            type="text"
            placeholder="Add tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <div style={{ height: "250px", marginBottom: "20px" }}>
            <ReactQuill
              theme="snow"
              value={questionBody}
              onChange={setQuestionBody}
              style={{ height: "200px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4da3ff",
              color: "#fff",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit Question
          </button>
        </form>

        {/* Posted Questions */}
        <div style={{ marginTop: "30px" }}>
          <h3>📌 Posted Questions</h3>
          {filteredQuestions.length === 0 && <p>No questions yet.</p>}
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              style={{
                background: highlightedId === q.id ? "#fff9c4" : "#fff",
                transition: "background 0.5s ease",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 0 5px rgba(0,0,0,0.05)",
              }}
            >
              <h4>{q.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: q.body }} />
              <p>
                <strong>Category:</strong> {q.category}
              </p>
              <p>
                <strong>Tags:</strong> {q.tags.join(", ")}
              </p>
              <button
                onClick={() => handleLike(q.id)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#6cc070",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                👍 ({q.likes})
              </button>

              {/* Comments */}
              <div style={{ marginTop: "15px" }}>
                <h5>💬 Comments</h5>
                <ul>
                  {q.comments.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  style={{
                    padding: "6px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
                <button
                  onClick={() => {
                    handleAddComment(q.id, newComment);
                    setNewComment("");
                  }}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#ffd45c",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
