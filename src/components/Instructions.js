import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import InstructionText from './InstructionText'
import Template from './Template'
import Title from './Title'
import ButtonGroup from './ButtonGroup'
import Button from './Button'
import ButtonPointer from './ButtonPointer'
import Music from './Music'

const Instructions = () => {

    const [step, setStep] = useState(0)
    const [styles, setStyles] = useState({
        bgColor: '#000',
        titleColor: '#FFFF00',
        templateBorder: 'template-border-highlight',
        instructionTextDesktopOutline: 'none',
        musicBtnColor: '#FFFF00'
    })

    const history = useHistory()

    const renderBody = () => {
        switch(step) {
            case 0:
                return (
                    <Fragment>
                        <InstructionText
                            header_text='THIS IS EASY.'
                            body_text='Choose whether someone is a star, leader, or noone.'
                            highlight
                        />
                        <ButtonPointer text className='button-pointer-middle' />
                        <ButtonGroup borderColor='#FFFF00'>
                            <Button click={next} textColor='#FFFF00'>
                                TELL ME HOW
                            </Button>
                        </ButtonGroup>
                    </Fragment>
                )
            case 1:
                return (
                    <Fragment>
                        <InstructionText
                            body_text='If you think someone is a star,'
                            footer_text='("a famous person or celebrity")'
                            className={styles.instructionTextDesktopOutline}
                            highlight
                        />
                        <ButtonPointer text className='button-pointer-left' />
                        <ButtonGroup manual>
                            <Button click={next} textColor='#fff' className='button-active-left'>
                                STAR
                            </Button>
                            <Button disabled textColor='rgb(158, 158, 158)' className='button-disabled-middle'>
                                NO ONE
                            </Button>
                            <Button disabled textColor='rgb(158, 158, 158)' className='button-disabled-right'>
                                LEADER
                            </Button>
                        </ButtonGroup>
                    </Fragment>
                )
            case 2:
                return (
                    <Fragment>
                        <InstructionText
                            body_text='If you think someone is a leader,'
                            footer_text='(“a person who leads a group, audience, organization, or country”)'
                            className={styles.instructionTextDesktopOutline}
                            highlight
                        />
                        <ButtonPointer text className='button-pointer-right' />
                        <ButtonGroup manual>
                            <Button disabled textColor='rgb(158, 158, 158)' className='button-disabled-left'>
                                STAR
                            </Button>
                            <Button disabled textColor='rgb(158, 158, 158)' className='button-disabled-middle'>
                                NO ONE
                            </Button>
                            <Button click={next} textColor='#fff' className='button-active-right'>
                                LEADER
                            </Button>
                        </ButtonGroup>
                    </Fragment>
                )
            case 3:
                return (
                    <Fragment>
                        <InstructionText
                            body_text="If you don't know who they are"
                            footer_text='(or they are no one to you)'
                            className={styles.instructionTextDesktopOutline}
                            highlight
                        />
                        <ButtonPointer text className='button-pointer-middle' />
                        <ButtonGroup manual>
                            <Button disabled textColor='#ccc' className='button-disabled-left'>
                                STAR
                            </Button>
                            <Button click={next} textColor='#fff' className='button-active-middle'>
                                NO ONE
                            </Button>
                            <Button disabled textColor='rgb(158, 158, 158)' className='button-disabled-right'>
                                LEADER
                            </Button>
                        </ButtonGroup>
                    </Fragment>
                )
            case 4:
                return (
                    <Fragment>
                        <InstructionText
                            body_text="We'll tell you how they rank, and we'll tell you how you rank alongside the world."
                            footer_text="Test yourself and see whether you believe the same of others as your friends, family and the world around you."
                            className={styles.instructionTextDesktopOutline}
                        />
                        <ButtonPointer text className='button-pointer-middle noselect' color='#000' />
                        <ButtonGroup borderColor='#000'>
                            <Button click={next} textColor='#000'>
                                LET'S GO
                            </Button>
                        </ButtonGroup>
                    </Fragment>
                )
        }
    }

    const next = () => {
        const nextStep = step + 1
        if(nextStep === 4) {
            setStyles({ ...styles, templateBorder: 'template-border-black' })
        } else {
            setStyles({
                ...styles,
                templateBorder: 'template-border-black',
                instructionTextDesktopOutline: 'instruction-text-desktop-outline-highlight'
            })
        }
        nextStep === 4 && setStyles({ ...styles, bgColor: '#FFFF00', titleColor: '#000', musicBtnColor: '#000' })
        nextStep === 5 ? finish() : setStep(nextStep)
    }

    const finish = () => {
        history.push('/')
    }

    const render = () => {
        return (
            <Template bgColor={styles.bgColor} className={styles.templateBorder} style={{ border: styles.templateBorder }}>
                <Music color={styles.musicBtnColor} />
                <Title textColor={styles.titleColor} />
                { renderBody() }
            </Template>
        )
    }

    return (
        <Fragment>
            { render() }
        </Fragment>
    )
}

export default Instructions