import React from 'react'
// 追記
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          {/* // href属性に飛ばしたい位置を指定 */}
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#skills' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              SKILLS
            </Button>
          </AnchorLink>
          <AnchorLink href='#works' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              Works
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
            CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;