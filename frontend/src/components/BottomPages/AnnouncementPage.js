import mockAnnouncements from "../../mockData/announcements";
import "../css/AnnouncementPage.css";

function AnnouncementPage() {
  return (
    <div className="page">
      <h1>Kunngjøringer</h1>
      {mockAnnouncements.map((announcement) => (
        <div
          key={announcement.id}
          className={announcement.isPinned ? "announcement-card pinned" : "announcement-card"}
        >
          <div className="announcement-header">
            <span>Rom {announcement.roomNumber} - {announcement.date}</span>
          </div>
          <div className="announcement-text">
            {announcement.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnnouncementPage;