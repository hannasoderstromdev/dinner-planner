import React from 'react'

import styles from './Main.module.scss'

/**
 *  Use this component for shared styling, like content padding
 */

const Main = ({ children }) => <div className={styles.main}>{children}</div>

export default Main
