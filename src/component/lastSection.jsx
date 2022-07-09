import React from 'react'
import Input from './input'
import './lastSection.css'

const LastSection = () => {

    const content = [
        {
            id: 1,
            title: 'What is NextFlix?',
        },
        {
            id: 2,
            title: 'How much does NextFlix cost?',
        },
        {
            id: 3,
            title: 'Where can I watch?',
        },
        {
            id: 4,
            title: 'How can I cancel?',
        },
        {
            id: 5,
            title: 'What can I watch on NextFlix?',
        },
        {
            id: 6,
            title: 'Is NextFlix good for kids?',
        }
    ]

    let contentList = content.map(item => {
        return (
            <div className="content" key={item.id}>
                <h3 className='faqTitle'>{item.title}</h3>
                <span className='plusSign'>+</span>
            </div>
        )
    })

  return (
    <div className='lastSectionContainer'>
        <h1 className='Topic'>Frequently Asked Questions</h1>
        <div className='moveDown'>
            {contentList}
        </div>
        <Input />
    </div>
  )
}

export default LastSection