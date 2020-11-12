import React from 'react';

const styles = {
  container: {
    borderRadius: 20,
    width: 200,
    margin: '10px 0'
  },
  logoContainer: {
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px 20px 0 0',
    background: '#36C870'
  },
  logo: {
    borderRadius: '50%'
  },
  textContainer: {
    textAlign: 'center',
    borderRadius: '0 0 20px 20px',
    background: '#FFC95F',
    padding: '10px 0'
  },
  name: {
    margin: '5px 0',
    fontWeight: 'bold'
  },
  gender: {
    margin: 0
  }
}

const User = ({name, gender, picture }) =>
  <div style={styles.container}>
    <div style={styles.logoContainer}>
      <img style={styles.logo}src={picture.medium} alt="avatar"/>
    </div>
    <div style={styles.textContainer}>
      <p style={styles.name}>
        { `${name.first} ${name.last}` }
      </p>
      <p style={styles.gender}>
        { `${gender}` }
      </p>
    </div>
  </div>

export default User
