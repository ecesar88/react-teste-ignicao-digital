import React from 'react'
import { Container } from '@material-ui/core'

const Teapot: React.FC = () => {
    return (
        <Container>
            <div style={{
                height: '100%',
                width: '100%'
            }}>

                <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ fontWeight: 'bold' }}>418 - I'm a teapot</h1>
                    <h4>
                        This  error response code indicates that the server refuses to brew coffee because it is,
                        permanently, a teapot. For reference, a combined coffee/tea pot that is temporarily out
                        of coffee should instead return 503.
                </h4>

                </div>

            </div>
        </Container>
    )
}

export default Teapot
