import React from "react"
import { Link } from "gatsby"
import styles from "./tagButtonStyles.module.scss"

const TagButton = ({ tag }) => (
  <Link className={styles.tagButton} to={`tags/${tag}`}>
    {tag}
  </Link>
)

export default TagButton
