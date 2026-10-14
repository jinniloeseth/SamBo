import { useState } from "react";
import mockAnnouncements from "../../mockData/announcements.js";
import "../css/AnnouncementPage.css";

function AnnouncementPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredAnnouncements = mockAnnouncements.filter((announcement) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "pinned") return announcement.isPinned;
    return announcement.category === selectedCategory;
  });

  return (
    <div className="page">
      <div className="page-header">
        <h3>Kunngjøringer</h3>
        <select
          className="filter-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Alle</option>
          <option value="pinned">Festet</option>
          <option value="General">Generelt</option>
          <option value="Maintenance">Vedlikehold</option>
          <option value="Social">Sosialt</option>
          <option value="Important">Viktig</option>
        </select>
      </div>

      {filteredAnnouncements.map((announcement) => {
        const sender =
          announcement.createdByUser.role === "Admin"
            ? "Admin"
            : `Rom ${announcement.createdByUser.roomNumber}`;

        return (
          <div
            key={announcement.id}
            className={announcement.isPinned ? "announcement-card pinned" : "announcement-card"}
          >
            <div className="announcement-header">
              <span>{sender} - {announcement.date}</span>
            </div>
            <div className="announcement-text">
              {announcement.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnnouncementPage;