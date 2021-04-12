import React from 'react';

const EngineerCard = ({engineer}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{engineer.name}</h5>
        <p className="card-text">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID: {engineer.id}</li>
            <li className="list-group-item">Department: {engineer.department}</li>
          </ul>
        </p>
        <button className="btn btn-primary" disabled={engineer.login ? '' : 'disabled'}>{engineer.login ? '登录成功！' : '登录中。。。'} <i className={engineer.login ? 'fa fa-check' : 'fa fa-spinner'} aria-hidden='true' /> </button>
      </div>
    </div>
  );
}
 
export default EngineerCard;