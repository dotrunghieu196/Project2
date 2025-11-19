// components/ContentBox.tsx
import styles from '../../styles/ContentBox.module.css'

export default function ContentBox() {
  return (
    <div className={styles.contentBox}>
      <h3>Trang chủ</h3>
      <div className={styles.dashboard}>
        {/* Bạn có thể thêm biểu đồ, bảng dữ liệu, hoặc thống kê ở đây */}
      </div>
    </div>
  )
}