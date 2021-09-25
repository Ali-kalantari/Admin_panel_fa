import React,{useState} from 'react'
import './userdoc.css';

export default function UserDoc() {
    const [userdoc] = useState([]);

    return (
        <div className='user-doc'>
            <div className='user-doc-box'>
                <div className='user-doc-box-up'>
                    <div className='user-doc-items'>
                        {
                            userdoc.length > 0 ? <ul>{userdoc.map(item=><li>{item}</li>)}</ul> :
                            <div className='user-doc-item'>
                                <div className='user-doc-item-content'>اسنادی برای نمایش وجود ندارد. در صورت نیاز آپلود کنید</div>
                            </div>
                        }
                    </div>
                </div>
                <div className='user-doc-box-down'>
                    <button className='add-new-doc'>آپلود مدرک جدید</button>
                </div>

            </div>
        </div>
    )
}
