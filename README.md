# demo-App

## tcpterm

tcpterm visualize packets in TUI.
[![asciicast](https://asciinema.org/a/td3DA8LH04XYhxGPirJvsEI4V.png)](https://asciinema.org/a/td3DA8LH04XYhxGPirJvsEI4V)
Usage
---
```
$ tcpterm -h
NAME:
   tcpterm - tcpdump for human

USAGE:
   tcpterm [global options] command [command options] [arguments...]

VERSION:
   0.0.1

COMMANDS:
     help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --interface value, -i value  If unspecified, use lowest numbered interface.
   --read value, -r value       Read packets from pcap file.
   --filter value, -f value     BPF Filter
   --debug                      debug mode.
   --help, -h                   show help
   --version, -v                print the version

Example:
    tcpterm -i lo

```
More information [here](https://github.com/sachaos/tcpterm)

---

## httpflow
[![asciicast](https://asciinema.org/a/scdzwLDNytSPHtpbu1ECSv5FV.svg)](https://asciinema.org/a/scdzwLDNytSPHtpbu1ECSv5FV)

## Usage

```
libpcap version libpcap version 1.9.1
httpflow version 0.0.9

Usage: httpflow [-i interface | -r pcap-file] [-u url-filter] [-w output-path] [expression]

  -i interface      Listen on interface, This is same as tcpdump 'interface'
  -r pcap-file      Read packets from file (which was created by tcpdump with the -w option)
                    Standard input is used if file is '-'
  -u url-filter     Matches which urls will be dumped
  -w output-path    Write the http request and response to a specific directory

  expression        Selects which packets will be dumped, The format is the same as tcpdump's 'expression' argument
                    If filter expression is given, only packets for which expression is 'true' will be dumped
                    For the expression syntax, see pcap-filter(7)

  For more information, see https://github.com/six-ddc/httpflow
```
---
## Other tools

- iotop
  - [![asciicast](https://asciinema.org/a/12169.svg)](https://asciinema.org/a/12169)
- iftop 
  - [![asciicast](https://asciinema.org/a/12166.svg)](https://asciinema.org/a/12166)

- tcpdump
  - [![asciicast](https://asciinema.org/a/277349.svg)](https://asciinema.org/a/277349)

---
## API 

## Indices

* [Ungrouped](#ungrouped)

  * [Fibonacci](#1-fibonacci)
  * [Web Page](#2-web-page)
  * [host info](#3-host-info)


--------


## API



### 1. Fibonacci


Calc fibonacci


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8181/fibonacci/
```



### 2. Web Page



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8282/
```



### 3. host info


Network, Uptime, CPU, Hostname


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8181
```


