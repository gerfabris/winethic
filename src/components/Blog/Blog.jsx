import { useState, useEffect } from "react";
import { AnimatedLetters } from "../AnimatedLetters/AnimatedLetters";
import { useTranslation } from 'react-i18next';
import { useDataTraductions } from '../../hooks/useDataTraductions';
import { renderContent } from './useRenderContent';
import Loader from 'react-loaders';
/* -- data --  */
import eventsSpanish from '../../data/dataEventsEnglish.json';
import eventsEnglish from '../../data/dataEventsEnglish.json';
import notesSpanish from '../../data/dataNotesSpanish.json';
import notesEnglish from '../../data/dataNotesEnglish.json';
/* -- styles -- */
import './Blog.css'
/* --- --- */
export const Blog = () => {
    /* Animated Letters */
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    /* -- translation -- */
    const {t} = useTranslation('global');
    const getTitleArray = () => {
        let title = t('blog.title')    
        return title.split('')
    }
    const getTitleEventsArray = () => {
        let title = t('blog.titleEvents')    
        return title.split('')
    }
    const getTitleNotesArray = () => {
        let title = t('blog.titleNotes')    
        return title.split('')
    }
    const titleArray = getTitleArray()
    const titleEventsArray = getTitleEventsArray()
    const titleNotesArray = getTitleNotesArray()
    const events = useDataTraductions(eventsSpanish, eventsEnglish)
    const notes = useDataTraductions(notesSpanish, notesEnglish)
    /* -- -- */
    return(
        <>
            <div className="container blog-page">
                <h1 className="blog-page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={titleArray}
                        idx={10}
                    />
                </h1>
                <h2 className="blog-page-subtitle">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={titleEventsArray}
                        idx={10}
                    />
                </h2>
                <div className="containerRender-events">{renderContent(events)}</div>
                <h3 className="blog-page-subtitle">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={titleNotesArray}
                        idx={10}
                    />
                </h3>
                <div className="containerRender-notes">{renderContent(notes)}</div>
            </div>
            <Loader type='ball-zig-zag-deflect' />
        </>
    )
}