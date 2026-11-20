* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f1f5f9;
    color: #1e293b;
    display: flex;
}

.sidebar {
    width: 250px;
    min-height: 100vh;
    background: #172554;
    color: white;
    padding: 25px 18px;
    position: fixed;
    display: flex;
    flex-direction: column;
}

.sidebar h2 {
    margin-bottom: 8px;
}

.tagline {
    color: #bfdbfe;
    font-size: 12px;
    margin-bottom: 35px;
}

nav a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 14px 10px;
    border-radius: 8px;
    margin-bottom: 8px;
}

nav a:hover {
    background: #2563eb;
}

.footer {
    margin-top: auto;
    font-size: 11px;
    color: #bfdbfe;
}

main {
    margin-left: 250px;
    width: calc(100% - 250px);
    padding: 30px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 15px;
}

header p {
    color: #64748b;
    margin-top: 8px;
}

.profile {
    background: white;
    padding: 12px;
    border-radius: 10px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.card, .panel {
    background: white;
    padding: 22px;
    border-radius: 14px;
    box-shadow: 0 3px 12px #00000008;
}

.card p {
    color: #64748b;
}

.card h2 {
    color: #2563eb;
    font-size: 30px;
    margin-top: 12px;
}

.panel {
    margin-bottom: 22px;
}

.panel h2 {
    margin-bottom: 20px;
}

form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

input {
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    flex: 1;
    min-width: 130px;
    outline-color: #2563eb;
}

button {
    padding: 12px 18px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #1d4ed8;
}

.secondary {
    background: #64748b;
    margin: 5px;
}

.subject-item, .task-item {
    padding: 14px;
    background: #f8fafc;
    border-radius: 8px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.subject-item button, .task-item button {
    padding: 7px 10px;
    background: #dc2626;
}

.chart {
    display: flex;
    align-items: end;
    gap: 16px;
    height: 180px;
    padding: 20px 5px 0;
    overflow-x: auto;
    margin-top: 15px;
    border-bottom: 1px solid #cbd5e1;
}

.bar {
    min-width: 48px;
    flex: 1;
    max-width: 90px;
    background: #3b82f6;
    border-radius: 6px 6px 0 0;
    position: relative;
    text-align: center;
}

.bar span {
    position: absolute;
    bottom: -38px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    white-space: nowrap;
}

.bar b {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
}

#suggestions {
    background: #eff6ff;
    padding: 15px;
    border-radius: 8px;
    line-height: 1.8;
}

@media (max-width: 900px) {
    .stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    body {
        display: block;
    }

    .sidebar {
        position: relative;
        width: 100%;
        min-height: auto;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
    }

    nav a {
        font-size: 12px;
        padding: 10px;
    }

    .footer {
        margin-top: 15px;
    }

    main {
        margin-left: 0;
        width: 100%;
        padding: 15px;
    }

    header {
        align-items: flex-start;
        flex-direction: column;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .card, .panel {
        padding: 15px;
    }
}
