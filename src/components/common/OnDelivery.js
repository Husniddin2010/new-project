import React from 'react'
import styles from '@/styles/order.module.css'

function OnDelivery () {
    return (
        <div className='gramw'>
            <div className={styles['status']}>
                <img src='./truck 1.png' />
                <select>
                    <option>OnDelivery</option>
                    <option>2</option>
                </select>
            </div>
        </div>
    )
}

export default OnDelivery