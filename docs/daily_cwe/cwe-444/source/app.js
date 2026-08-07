const net = require('net');
const http = require('http');

const FLAG = "AoiCTF{h77p_smugg1ing_w4f_byp4ss}";

// =====================
// 1. BACKEND SERVER
// =====================

const backend = http.createServer((req, res) => {
    req.on('data', () => {}); // consume body stream
    req.on('end', () => {
        if (req.url === '/admin') {
            res.writeHead(200, { 
                'Content-Type': 'text/plain',
                'Connection': 'keep-alive'
            });
            res.end(`[+] Welcome admin! Here is your flag: ${FLAG}\n`);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Connection': 'keep-alive'
            });
            res.end("[-] Welcome guest! The flag is at /admin\n");
        } 
    });
});

backend.listen(3001, '127.0.0.1');

// =====================
// 2. FRONTEND PROXY
// =====================

const proxy = net.createServer((clientSocket) => {
    const backendSocket = net.createConnection({ host: '127.0.0.1', port: 3001});
    backendSocket.on('data', (data) => {
        clientSocket.write(data);
    });

    clientSocket.on('data', (data) => {
        const reqStr = data.toString();
        // CAUTION : WAF only parse first line of TCP stream to block access /admin
        // CAUTION : WAF cannot understand CL/TE
        const firstLine = reqStr.split('\r\n')[0] || '';
        if (firstLine.includes('/admin')) {
            clientSocket.write("HTTP/1.1 403 Forbidden\r\n\r\n[WAF] Access to /admin is blocked!");
            clientSocket.end();
            return;
        }
        // Blindly forward raw bytes to backend
        backendSocket.write(data);
    })
    // Cleanup resources
    clientSocket.on('error', () => {});
    backendSocket.on('error', () => {});
    clientSocket.on('close', () => backendSocket.end());
    backendSocket.on('close', () => clientSocket.end());
});

proxy.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on port 3000");
})

