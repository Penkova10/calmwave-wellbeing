import { useEffect, useState } from 'react'
import './App.css'

const recommendations = {
  stress: {
    emoji: '🧠',
    shortLabel: 'Stress support',
    title: 'Stress Support Path',
    description: 'Your answers show that stress may be your main pressure today.',
    action: 'Try a 60-second breathing reset, then write one thing you can control.',
    reflection: 'What is one pressure that would feel smaller if you broke it into steps?'
  },
  sleep: {
    emoji: '🌙',
    shortLabel: 'Sleep reset',
    title: 'Sleep Reset Path',
    description: 'Your answers show that your sleep routine may need more care today.',
    action: 'Try a calm 30-minute wind-down before bed, without scrolling.',
    reflection: 'What usually makes it harder for you to fall asleep?'
  },
  school: {
    emoji: '📚',
    shortLabel: 'School pressure',
    title: 'School Pressure Path',
    description: 'Your answers show that school pressure may feel heavy today.',
    action: 'Choose one school task and work on the first small step for 10 minutes.',
    reflection: 'Which school task feels easier if you only start, not finish?'
  },
  screen: {
    emoji: '📱',
    shortLabel: 'Screen balance',
    title: 'Screen Balance Path',
    description: 'Your answers show that screen overload may be affecting your focus or mood.',
    action: 'Take a 15-minute offline break after your next scroll session.',
    reflection: 'How do you usually feel after spending a long time online?'
  },
  movement: {
    emoji: '🚶',
    shortLabel: 'Movement reset',
    title: 'Movement Reset Path',
    description: 'Your answers show that your body may need movement and energy today.',
    action: 'Walk, stretch, or move for 10 minutes, even slowly.',
    reflection: 'What kind of movement feels easiest for you today?'
  }
}

const challenges = [
  {
    id: 'stress',
    emoji: '🧠',
    title: 'Calm Minute',
    text: 'Take 3 slow breaths and write down one thing you can control.'
  },
  {
    id: 'sleep',
    emoji: '🌙',
    title: 'Sleep Wind-down',
    text: 'Put your phone away 30 minutes before sleep.'
  },
  {
    id: 'school',
    emoji: '📚',
    title: 'Tiny School Step',
    text: 'Choose one task and work on it for only 10 minutes.'
  },
  {
    id: 'screen',
    emoji: '📱',
    title: 'Screen Pause',
    text: 'Take a 15-minute offline break after your next scroll session.'
  },
  {
    id: 'movement',
    emoji: '🚶',
    title: 'Body Reset',
    text: 'Stretch, walk, or move your body for 10 minutes.'
  }
]

function App() {
  const [answers, setAnswers] = useState({
    stress: 3,
    sleep: 3,
    school: 3,
    screen: 3,
    movement: 3
  })

  const [completedChallenges, setCompletedChallenges] = useState(() => {
    const saved = localStorage.getItem('calmwaveChallenges')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('calmwaveChallenges', JSON.stringify(completedChallenges))
  }, [completedChallenges])

  const pressureScores = {
    stress: answers.stress,
    sleep: 6 - answers.sleep,
    school: answers.school,
    screen: answers.screen,
    movement: 6 - answers.movement
  }

  const mainArea = Object.keys(pressureScores).reduce((highest, current) =>
    pressureScores[current] > pressureScores[highest] ? current : highest
  )

  const result = recommendations[mainArea]

  const wellbeingScore = Math.round(
    ((6 - answers.stress + answers.sleep + 6 - answers.school + 6 - answers.screen + answers.movement) / 25) * 100
  )

  function updateAnswer(name, value) {
    setAnswers({
      ...answers,
      [name]: Number(value)
    })
  }

  function scrollToCheckin() {
    document.getElementById('checkin').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToChallenges() {
    document.getElementById('challenges').scrollIntoView({ behavior: 'smooth' })
  }

  function toggleChallenge(id) {
    if (completedChallenges.includes(id)) {
      setCompletedChallenges(completedChallenges.filter((challengeId) => challengeId !== id))
    } else {
      setCompletedChallenges([...completedChallenges, id])
    }
  }

  return (
    <main className="app">
      <section className="hero">
        <nav className="navbar">
          <div className="logo">🌊 CalmWave</div>
          <div className="nav-links">
            <a href="#insights">Wellbeing Areas</a>
            <a href="#checkin">Check-in</a>
            <a href="#challenges">Challenges</a>
            <a href="#impact">Impact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">A youth wellbeing prototype inspired by HBSC themes</span>
            <h1>Small daily actions for a calmer, healthier day.</h1>
            <p>
              CalmWave helps young people reflect on how they feel,
              understand their main wellbeing pressure area, and choose one small action
              for a calmer, healthier day.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={scrollToCheckin}>
                Start daily check-in
              </button>
              <button className="secondary-btn" onClick={scrollToChallenges}>
                View wellbeing tips
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="mood-circle">{result.emoji}</div>
            <h2>Today’s CalmWave</h2>
            <p>Main focus: {result.shortLabel}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${wellbeingScore}%` }}></div>
            </div>
            <small>Wellbeing score: {wellbeingScore}%</small>
          </div>
        </div>
      </section>

      <section className="insights" id="insights">
        <h2>What the app focuses on</h2>
        <div className="cards">
          <div className="info-card">
            <span>🧠</span>
            <h3>Stress</h3>
            <p>Recognize pressure and choose one calming action.</p>
          </div>

          <div className="info-card">
            <span>🌙</span>
            <h3>Sleep</h3>
            <p>Support healthier evening routines and recovery.</p>
          </div>

          <div className="info-card">
            <span>📚</span>
            <h3>School pressure</h3>
            <p>Break overwhelming tasks into smaller steps.</p>
          </div>

          <div className="info-card">
            <span>📱</span>
            <h3>Screen balance</h3>
            <p>Notice when screen overload affects focus, mood, rest, or energy.</p>
          </div>

          <div className="info-card">
            <span>🚶</span>
            <h3>Movement</h3>
            <p>Use light movement to reset energy and mood.</p>
          </div>
        </div>
      </section>

      <section className="checkin" id="checkin">
        <div className="section-intro">
          <span className="badge">Daily check-in</span>
          <h2>How are you feeling today?</h2>
          <p>
            Move the sliders. The app will immediately calculate your main wellbeing focus.
          </p>
        </div>

        <div className="checkin-layout">
          <div className="question-card">
            <Slider
              label="Stress level"
              left="Calm"
              right="Very stressed"
              value={answers.stress}
              onChange={(value) => updateAnswer('stress', value)}
            />

            <Slider
              label="Sleep quality"
              left="Poor"
              right="Great"
              value={answers.sleep}
              onChange={(value) => updateAnswer('sleep', value)}
            />

            <Slider
              label="School pressure"
              left="Low"
              right="High"
              value={answers.school}
              onChange={(value) => updateAnswer('school', value)}
            />

            <Slider
              label="Screen overload"
              left="Balanced"
              right="Too much"
              value={answers.screen}
              onChange={(value) => updateAnswer('screen', value)}
            />

            <Slider
              label="Movement today"
              left="Still"
              right="Active"
              value={answers.movement}
              onChange={(value) => updateAnswer('movement', value)}
            />
          </div>

          <div className="result-card">
            <div className="result-emoji">{result.emoji}</div>
            <h2>{result.title}</h2>
            <p>{result.description}</p>

            <div className="result-action">
              <strong>Try today:</strong>
              <span>{result.action}</span>
            </div>

            <div className="reflection">
              <strong>Reflection question:</strong>
              <span>{result.reflection}</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${wellbeingScore}%` }}></div>
            </div>
            <small>Your current wellbeing score: {wellbeingScore}%</small>
          </div>
        </div>
      </section>

      <section className="challenges" id="challenges">
        <div className="section-intro">
          <span className="badge">Micro-challenges</span>
          <h2>Choose one small action for today.</h2>
          <p>
            Small actions feel easier than big goals. Each challenge supports
            emotional awareness, routine, focus, recovery, or body energy.
          </p>
        </div>

        <div className="challenge-dashboard">
          <div>
            <strong>{completedChallenges.length} of {challenges.length}</strong>
            <span> challenges completed today</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(completedChallenges.length / challenges.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="challenge-grid">
          {challenges.map((challenge) => {
            const isDone = completedChallenges.includes(challenge.id)

            return (
              <div className={`challenge-card ${isDone ? 'done' : ''}`} key={challenge.id}>
                <div className="challenge-emoji">{challenge.emoji}</div>
                <h3>{challenge.title}</h3>
                <p>{challenge.text}</p>

                <button onClick={() => toggleChallenge(challenge.id)}>
                  {isDone ? 'Undo' : 'Mark as done'}
                </button>
              </div>
            )
          })}
        </div>
      </section>
      <section className="impact" id="impact">
        <div className="section-intro">
          <span className="badge">Psychology and impact</span>
          <h2>Why CalmWave matters</h2>
          <p>
            CalmWave is a safe self-reflection prototype. It does not diagnose young
            people. It helps them notice how they feel, understand daily wellbeing
            pressure, and choose one small supportive action.
          </p>
        </div>

        <div className="impact-grid">
          <div className="impact-card large">
            <h3>Designed around small behaviour change</h3>
            <p>
              Instead of asking young people to solve everything at once, CalmWave gives
              one realistic action for the day. This makes wellbeing support feel
              easier, calmer, and less overwhelming.
            </p>
          </div>

          <div className="impact-card">
            <span>🧠</span>
            <h3>Emotional awareness</h3>
            <p>
              Young people reflect on feelings, stress, tiredness, focus, and energy.
            </p>
          </div>

          <div className="impact-card">
            <span>📱</span>
            <h3>Digital balance</h3>
            <p>
              The app helps users notice when screen overload affects rest,
              concentration, or mood.
            </p>
          </div>

          <div className="impact-card">
            <span>🌱</span>
            <h3>Micro-actions</h3>
            <p>
              Small challenges support healthier routines without pressure or judgment.
            </p>
          </div>

          <div className="impact-card">
            <span>🛡️</span>
            <h3>Ethical design</h3>
            <p>
              The app gives supportive suggestions, not medical labels or diagnosis.
            </p>
          </div>
        </div>
      </section>
          </main>
        )
      }

      function Slider({ label, left, right, value, onChange }) {
        return (
          <div className="slider-row">
              <div className="slider-top">
                <strong>{label}</strong>
                <span>{value}/5</span>
              </div>

              <input
                type="range"
                min="1"
                max="5"
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />

              <div className="range-labels">
                <small>{left}</small>
                <small>{right}</small>
              </div>
            </div>
  )
}

export default App