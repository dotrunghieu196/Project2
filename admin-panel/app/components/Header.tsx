// components/Header.tsx
import styles from '../../styles/Header.module.css'


export default function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.headerLeft}>
        <img src="/Images/avatar (2).png" alt="Avatar" />
        <h2>Chào buổi sáng, Hiếu</h2>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.searchArea}>
          <img src="/Images/search-icon.png" alt="Search" />
          <input type="text" placeholder="Nhập nội dung tìm kiếm" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.iconBtn}><img src="/Images/noti-button.png" alt="Noti-button" /></button>
          <button className={styles.iconBtn}><img src="/Images/message-button.png" alt="Message-button" /></button>
        </div>
      </div>
    </header>
  )
}