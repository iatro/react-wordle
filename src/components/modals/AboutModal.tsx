import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an medical version of the word guessing game we all know and
        love!

        Built with Love by the team at <a
          href="https://iatro.health"
          className="underline font-bold"
        >
          @iatro
        </a>{' '}

        Based on the Open Source {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          React Wordle
        </a>{' '}
      </p>
    </BaseModal>
  )
}
