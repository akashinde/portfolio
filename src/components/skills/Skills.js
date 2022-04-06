import Bar from "./Bar";

const Skills = () => {

    const frontend = [
        {
            name: 'HTML',
            percent: '80%'
        },
        {
            name: 'CSS',
            percent: '70%'
        },
        {
            name: 'JavaScript',
            percent: '90%'
        },
        {
            name: 'React',
            percent: '70%'
        }
    ]

    const backend = [
        {
            name: 'JavaScript',
            percent: '80%'
        },
        {
            name: 'NodeJs',
            percent: '80%'
        },
        {
            name: 'ExpressJS',
            percent: '70%'
        },
        {
            name: 'FastifyJS',
            percent: '80%'
        }
    ]

    const database = [
        {
            name: 'MongoDB',
            percent: '70%'
        },
        {
            name: 'MySQL',
            percent: '70%'
        }
    ]

    const infra = [
        {
            name: 'Docker',
            percent: '60%'
        },
        {
            name: 'Kubernetes',
            percent: '60%'
        }
    ]

    const blockchain = [
        {
            name: 'Core Blockchain',
            percent: '70%'
        },
        {
            name: 'Solidity',
            percent: '70%'
        },
        {
            name: 'Web3JS',
            percent: '60%'
        }
    ]

    return (
        <div id="skills" className="main">
            <div className="skills-container">
                <div className="skills-title">
                    <span>
                        My Technical Skills
                    </span>
                </div>
                <div className="bar-container">
                    <Bar title={"Frontend"} period={"More than 2 years"} languages={frontend}/>
                    <Bar title={"Backend"} period={"More than 1 year"} languages={backend}/>
                    <Bar title={"Database"} period={"More than 2 years"} languages={database}/>
                    <Bar title={"Infra"} period={"More than 1 year"} languages={infra}/>
                    <Bar title={"Blockchain"} languages={blockchain}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;