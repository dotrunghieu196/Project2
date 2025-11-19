// components/FilterGroup.tsx
'use client'
import { useState } from 'react'
import styles from '../../styles/FilterGroup.module.css'

export default function FilterGroup() {
  const [activeFilter, setActiveFilter] = useState(0)
  const filters = ['Filter 1', 'Filter 2', 'Filter 3']

  return (
    <div className={styles.filterGroup}>
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`${styles.filter} ${activeFilter === index ? styles.active : ''}`}
          onClick={() => setActiveFilter(index)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}