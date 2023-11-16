import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://media.istockphoto.com/id/1400398000/photo/victoria-sandwich-cake-decorated-with-strawberries-blueberries-and-mint-closeup.webp?b=1&s=170667a&w=0&k=20&c=3WwbtXe8Zzlcj2qJoI0D1vMVmcn9JhxbySr8gITgORw='
                    title='100% Natural Favours'
                    comment='25% Off! on Your First Order'
                    reverse={false}
                />
                <HomeCollectionItem
image='https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek='    
                title='Choose Your Own Flavour!'
                    
                    reverse={true}
                />
                <HomeCollectionItem
image='https://media.istockphoto.com/id/1173421906/photo/indian-traditional-fire-crackers-with-sweet-during-diwali-festival.jpg?s=612x612&w=0&k=20&c=Y7pJ9CipMQjh5SPHoT-HwRcxj0pr93fd5qhJmUR0nmw='                    title='Diwali Sweet Bonus!!!'
                    comment='25% Off! on All Diwali Sweets!!!'
                    reverse={false}
                />
            </div>
        </div>
    )
}

export default HomeCollection