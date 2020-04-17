import React from 'react'
import Menu from '../menu/menu'
import Header from '../header/header'
import Content from '../content/content'

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            navWidth: 45,
            collapse: true,
            tag: 'home',
        }
    }

    onNavigationStart = (tag) => {
        this.setState({
            tag: tag
        })
    }

    render() {
        let navContainer = {
            height: '100%',
        };
        return (
            <div style={styles.mainContainer}>
                <div style={navContainer}>
                    <Menu onNavigation={this.onNavigationStart} />
                </div>
                <div style={styles.sectionContainer}>
                    <div style={styles.sectionContainerHeader}>
                        <Header onLogOutClick={this.props.onLogOutClick} />
                    </div>
                    <div style={styles.sectionContainerContent}>
                        <Content tag={this.state.tag} />
                    </div>
                    {/* <div style={styles.sectionContainerFooter}>
                        <span>
                            <strong>{'Copyright'}</strong> {'©'} <strong>{'2020'}</strong> <span style={{ color: 'rgb(227, 6, 19)', fontWeight: 600 }}>{'Navistar'}</span>
                        </span>
                    </div> */}
                </div>
            </div>
        );
    }
}

const styles = {
    mainContainer: {
        display: 'flex',
        height: '100vh',
        flexWrap: 'nowrap',
    },

    sectionContainer: {
        flex: 12,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 45,
    },

    sectionContainerHeader: {
        width: '100%',
        height: 45,
        backgroundColor: '#fafafa',
        boxSizing: 'border-box'
    },

    sectionContainerContent: {
        flexGrow: 1,
        overflow: 'auto'
    },

    sectionContainerFooter: {
        width: '100%',
        height: 35,
        backgroundColor: 'white',
        borderTop: '.1vh solid #ccc',
        boxSizing: 'border-box',
        alignSelf: 'flex-end',
        display: 'flex',
        fontSize: 14,
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: '1vh',
        padding: '20px 15px 20px 15px',
        marginTop: 5
    }
}