import { useEffect, useState } from "react"

const useFood = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    const [lunches, setLunches] = useState([]);
    const [dinners, setDinners] = useState([]);
    const [chooseMe, setChooseMe] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunches(data))
    }, [])
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    useEffect(() => {
        fetch('chooseme.json')
            .then(res => res.json())
            .then(data => setChooseMe(data))
    }, [])

    return {
        breakfasts,
        lunches,
        dinners,
        chooseMe
    }

}

export default useFood;