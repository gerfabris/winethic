import { useTranslation } from 'react-i18next'


/* -- translation -- */
const [ t , i18n ] = useTranslation('global');
const getNameArray = () => {
    let name = t('home.title.name')    
    return name.split('')
} 
const getJobArray = () => {
    let job = t('home.title.slogan')    
    return job.split('')
} 

const nameArray = getNameArray()
const jobArray = getJobArray()
/* -- -- */
export { getNameArray, getJobArray }