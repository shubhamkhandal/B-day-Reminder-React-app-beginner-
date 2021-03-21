import React from 'react';

const List = ({people}) => {
    return (
        <>
            {
                people.map( (currElem) => {
                    const {id,name,age,image} = currElem;

                    return <article key={id} className="person">
                        <img src={image} alt={name} className="person-img my-5"/>
                        <div>
                            <h4 className="person-name">{name}</h4>
                            <p>{age} year</p>
                        </div>
                    </article>
                })
            }
        </>
    )
}
export default List;