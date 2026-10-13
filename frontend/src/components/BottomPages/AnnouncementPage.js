import mockAnnouncements from "../../mockData/announcements";
import "../css/AnnouncementPage.css";

function AnnouncementPage() {
  return (
    <div className="page">
      <h1>Kunngjøringer</h1>
      {mockAnnouncements.map((announcement) => {
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