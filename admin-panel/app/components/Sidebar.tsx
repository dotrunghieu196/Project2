// components/Sidebar.tsx
"use client"
import { useState } from 'react'
import styles from '../../styles/Sidebar.module.css'

const menuItems = [
  { label: 'Trang chủ', icon: 'Trang chủ' },
  { label: 'Quản lý sản phẩm', icon: 'Quản lý sản phẩm' },
  { label: 'Quản lý đơn hàng', icon: 'Quản lý đơn hàng' },
  { label: 'Quản lý khách hàng', icon: 'Quản lý khách hàng' },
  { label: 'Quản lý nhân viên', icon: 'Quản lý nhân viên' },
]


export default function Sidebar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/Images/Logo Light.png" alt="SmartCart Logo" />
      </div>
      <nav className={styles.menu}>
      {menuItems.map((item, index) => {
        const isHovered = hoveredIndex === index
        const isActive = activeIndex === index
        const iconSrc = isHovered || isActive
          ? `/Images/${item.icon} 1.png`
          : `/Images/${item.icon}.png`

        return (
          <a
            key={index}
            href="#"
            className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(index)}
          >
            <img src={iconSrc} alt={item.label} />
            {item.label}
          </a>
        )
      })}
    </nav>

    <div className={styles.spacer}></div>
    <div className={styles.userInfo}>
    <div className={styles.profile}>
        <img src="/Images/avatar (2).png" alt="Avatar" />
        <span>Đỗ Trung Hiếu</span>
    </div>
    <a href="#" className={styles.logout}>
        <img className={styles.iconDefault} src="/Images/Đăng xuất.png" alt="Đăng xuất" />
        Đăng xuất
    </a>
    </div>
    </aside>
  )
}