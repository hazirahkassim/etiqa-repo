import React from 'react'
import '../style/Profile.css'
import StarIcon from '@mui/icons-material/Star';


function Profile(props) {
    return (
        <>
            <div className="profile-info">
                <div className="container">
                    <div><p>Repo Name:{props.name}</p></div>
                    <div><p>Repo Descripion:{props.description}</p></div>
                    <div className="profile-details">
                        <div className="container">
                            <div className='profile-name'>
                                <img src={props.owner.avatar_url} alt={props.owner.login} className='profile-image' />
                                <div className='name'>{props.owner.login}</div>
                            </div>

                            <div><StarIcon fontSize="small" />{props.stargazers_count.toLocaleString()}</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
