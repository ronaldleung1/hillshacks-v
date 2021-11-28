import { IconButton, useColorMode } from 'theme-ui'
import { Moon, Sun } from 'react-feather'

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode()
  return (
    <IconButton
      onClick={() => setMode(mode === 'default' ? 'dark' : 'default')}
      title={`Switch to ${mode === 'default' ? 'dark' : 'default'} mode`}
      sx={{
        zIndex: 999,
        color: 'currentColor',
        cursor: 'pointer',
        borderRadius: 'circle',
        transition: 'box-shadow .125s ease-in-out',
        ':hover,:focus': {
          boxShadow: '0 0 0 2px',
          outline: 'none'
        }
      }}
      {...props}
    >
      {mode === 'default' ? (
        <Moon size={32} sx={{ fill: 'currentColor' }} />
      ) : (
        <Sun size={32} sx={{ fill: 'currentColor' }} />
      )}
    </IconButton>
  )
}

export default ColorSwitcher