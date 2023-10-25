import PropTypes from 'prop-types'
import './button.css'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <>
      <button onClick={() => { history.back() }}>
        Back to Home Page
      </button>
      <br />
      <h1>Storybook Example</h1>
      <p>To see the storybook, run <code>npm run storybook</code> in the terminal and go to the returned URL.</p>
      <p>In the left hand menu, go to Example ➡️ Button.</p>
      <p>There you will see the Primary, Secondary, Large, and Small variants for the Button component.</p>
      <p>To see how a story is defined, go to <code>src/stories/Button.stories.jsx</code>.</p>
      <p>This is a way to test your components before pushing them to the repo.</p>
      <p>Also, it is a recommended practice because it helps you to be sure that the props you define will be used.</p>
      <p>Another advantage is that you can test the behavior of the component depending on the props.</p>
      <p>This is the component we created a story for ⬇️</p>

      <div className="wrapper">
        <button
          type="button"
          className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
          style={backgroundColor && { backgroundColor }}
          {...props}
        >
          {label}
        </button>
      </div>
    </>
  )
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: 'medium',
  label: 'Click me!',
  onClick: undefined,
}
