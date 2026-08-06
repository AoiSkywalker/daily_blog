---
title: Daily CWE
---
# DIARY OF LEARNING COMMON WEAKNESS ENUMERATION

This page is the start point to navigate some fields in CWE.

## Web CWE

Client-Side Controls
Auth
Session Management
Access Control
Data Stores
BE Components
Application Logic
Native Compiled App
App Arch
App Server

=== "Group 1: Injection & Parsing"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-20** | Improper Input Validation | |
    | **CWE-74** | Improper Neutralization of Special Elements in Output Used by a Downstream Component | Injection |
    | **CWE-77** | Improper Neutralization of Special Elements used in a Command | Command Injection |
    | **CWE-78** | Improper Neutralization of Special Elements used in an OS Command | OS Command Injection |
    | **CWE-79** | Improper Neutralization of Input During Web Page Generation | Cross-Site Scripting |
    | **CWE-80** | Improper Neutralization of Script-related HTML Tags in a Web Page | Basic XSS |
    | **CWE-83** | Improper Neutralization of Script in Attributes in a Web Page | |
    | **CWE-87** | Improper Neutralization of Alternate XSS Syntax | |
    | **CWE-88** | Improper Neutralizatio of Argument Delimeters in a Command | Argument Injection |
    | **CWE-89** | Improper Neutralization of Special Elements used in an SQL Command | SQL Injection |
    | **CWE-90** | Improper Neutralization of Special Elements used in an LDAP Query | LDAP Injection |
    | **CWE-91** | XML Injection | XPath/XQuery Injection |
    | **CWE-93** | Improper Neutralization of CRLF Sequences | CRLF Injection |
    | **CWE-94** | Improper Control of Generation of Code | Code Injection |
    | **CWE-95** | Improper Neutralization of Directives in Dynamically Evaluated Code | Eval Injection |
    | **CWE-96** | Improper Neutralization of Directives in Statically Saved Code | Static Code Injection |
    | **CWE-99** | Improper Control of Resource Identifiers | Resource Injection |
    | **CWE-113** | Improper Neutralization of CRLF Sequences in HTTP Headers | HTTP Request/Response Splitting |
    | **CWE-116** | Improper Encoding or Escaping of Output | |
    | **CWE-138** | Improper Neutralization of Special Elements | |
    | **CWE-143** | Improper Neutralization of Record Delimeters | |
    | **CWE-564** | SQL Injection Hibernate | |
    | **CWE-643** | Improper Neutralization of Data within XPath Expressions | XPath Injection |
    | **CWE-917** | Improper Neutralization of Special Elements used in an Expression Language Statement | Expression Language Injection, log4shell, log4j |
    | **CWE-1336** | Improper Neutralization of Special Elements used in a Template Engine | SSTI, CSTI |

=== "Groupt 2: Client-Side Controls"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-79** | | |
    | **CWE-80** | | |
    | **CWE-81** | | |
    | **CWE-82** | | |
    | **CWE-83** | | |
    | **CWE-84** | | |
    | **CWE-85** | | |
    | **CWE-86** | | |
    | **CWE-87** | | |
    | **CWE-116** | | |
    | **CWE-346** | | |
    | **CWE-352** | | |
    | **CWE-601** | | |
    | **CWE-602** | | |
    | **CWE-798** | | |
    | **CWE-830** | | |
    | **CWE-924** | | |
    | **CWE-1021** | | |
    | **CWE-1022** | | |
    | **CWE-1173** | | |

=== "Group 3: Authentication"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-287** | Improper Authentication | |
    | **CWE-288** | Authentication Bypass using an Alternate Path or Channel | |
    | **CWE-289** | Authentication Bypass by Alternate Name | |
    | **CWE-290** | Authentication Bypass by Spoofing | |
    | **CWE-294** | Authentication Bypass by Capture-replay | |
    | **CWE-301** | Reflection Attack in an Authentication Protocol | |
    | **CWE-302** | Authentication Bypass by Assumed-Immutable Data | |
    | **CWE-303** | Incorrect Implementation of Authentication Algorithm | |
    | **CWE-304** | Missing Critical Step in Authentication | |
    | **CWE-305** | Authentication Bypass by Primary Key Bypass | |
    | **CWE-306** | Missing Authentication for Critical Function | |
    | **CWE-307** | Improper Restriction of Excessive Authentication Attempts | |
    | **CWE-308** | Use of Single-factor Authentication | |
    | **CWE-309** | Use of Passwrod System for Primary Authentication | |
    | **CWE-522** | Insufficiently Protected Credentials | |
    | **CWE-620** | Unverified Password Change | |
    | **CWE-640** | Weak Password Recovery Mechanism for Forgotten Password | |
    | **CWE-804** | Guessable CAPTCHA | |
    | **CWE-836** | Use of Password Hasg with Insufficient Computational Effort | |
    | **CWE-1390** | Weak Authentication | |

=== "Group 4: Session Management"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-330** | | |
    | **CWE-331** | | |
    | **CWE-334** | | |
    | **CWE-345** | | |
    | **CWE-347** | | |
    | **CWE-384** | | |
    | **CWE-488** | | |
    | **CWE-501** | | |
    | **CWE-539** | | |
    | **CWE-565** | | |
    | **CWE-613** | | |
    | **CWE-614** | | |
    | **CWE-668** | | |
    | **CWE-841** | | |
    | **CWE-922** | | |
    | **CWE-1004** | | |
    | **CWE-1175** | | |
    | **CWE-1199** | | |
    | **CWE-1270** | | |
    | **CWE-1275** | | |
    
=== "Group 5: Access Controls"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-22** | | |
    | **CWE-23** | | |
    | **CWE-24** | | |
    | **CWE-35** | | |
    | **CWE-36** | | |
    | **CWE-250** | | |
    | **CWE-266** | | |
    | **CWE-269** | | |
    | **CWE-276** | | |
    | **CWE-284** | | |
    | **CWE-285** | | |
    | **CWE-425** | | |
    | **CWE-639** | | |
    | **CWE-653** | | |
    | **CWE-706** | | |
    | **CWE-732** | | |
    | **CWE-862** | | |
    | **CWE-863** | | |
    | **CWE-1244** | | |
    | **CWE-1313** | | |

=== "Group 6: Data Stores"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-89** | | |
    | **CWE-90** | | |
    | **CWE-91** | | |
    | **CWE-200** | | |
    | **CWE-201** | | |
    | **CWE-202** | | |
    | **CWE-209** | | |
    | **CWE-434** | | |
    | **CWE-502** | | |
    | **CWE-506** | | |
    | **CWE-538** | | |
    | **CWE-540** | | |
    | **CWE-548** | | |
    | **CWE-564** | | |
    | **CWE-611** | | |
    | **CWE-643** | | |
    | **CWE-652** | | |
    | **CWE-909** | | |
    | **CWE-943** | | |
    | **CWE-1232** | | |

=== "Group 7: Backend Components"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-77** | | |
    | **CWE-78** | | |
    | **CWE-88** | | |
    | **CWE-94** | | |
    | **CWE-95** | | |
    | **CWE-96** | | |
    | **CWE-97** | | |
    | **CWE-98** | | |
    | **CWE-99** | | |
    | **CWE-113** | | |
    | **CWE-114** | | |
    | **CWE-117** | | |
    | **CWE-444** | | |
    | **CWE-624** | | |
    | **CWE-917** | | |
    | **CWE-918** | | |
    | **CWE-1321** | | |
    | **CWE-1333** | | |
    | **CWE-1336** | | |
    | **CWE-1345** | | |

=== "Group 8: Application Logic"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-362** | | |
    | **CWE-367** | | |
    | **CWE-400** | | |
    | **CWE-471** | | |
    | **CWE-472** | | |
    | **CWE-473** | | |
    | **CWE-674** | | |
    | **CWE-697** | | |
    | **CWE-770** | | |
    | **CWE-799** | | |
    | **CWE-837** | | |
    | **CWE-840** | | |
    | **CWE-1023** | | |
    | **CWE-1024** | | |
    | **CWE-1025** | | |
    | **CWE-1039** | | |
    | **CWE-1284** | | |
    | **CWE-1285** | | |
    | **CWE-1320** | | |
    | **CWE-1384** | | |

=== "Group 10: Native Compiled Application"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-119** | | |
    | **CWE-120** | | |
    | **CWE-121** | | |
    | **CWE-122** | | |
    | **CWE-123** | | |
    | **CWE-124** | | |
    | **CWE-125** | | |
    | **CWE-126** | | |
    | **CWE-127** | | |
    | **CWE-129** | | |
    | **CWE-131** | | |
    | **CWE-134** | | |
    | **CWE-190** | | |
    | **CWE-191** | | |
    | **CWE-415** | | |
    | **CWE-416** | | |
    | **CWE-476** | | |
    | **CWE-787** | | |
    | **CWE-824** | | |
    | **CWE-843** | | |

=== "Group 11: Application Architecture"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-208** | | |
    | **CWE-295** | | |
    | **CWE-310** | | |
    | **CWE-321** | | |
    | **CWE-322** | | |
    | **CWE-327** | | |
    | **CWE-328** | | |
    | **CWE-329** | | |
    | **CWE-338** | | |
    | **CWE-404** | | |
    | **CWE-424** | | |
    | **CWE-426** | | |
    | **CWE-523** | | |
    | **CWE-547** | | |
    | **CWE-598** | | |
    | **CWE-650** | | |
    | **CWE-1059** | | |
    | **CWE-1104** | | |
    | **CWE-1357** | | |
    | **CWE-1385** | | |

=== "Group 12: Application Server"

    | CWE | Weakness Name | Note |
    | :--- | :--- | :--- |
    | **CWE-11** | | |
    | **CWE-15** | | |
    | **CWE-16** | | |
    | **CWE-260** | | |
    | **CWE-436** | | |
    | **CWE-529** | | |
    | **CWE-530** | | |
    | **CWE-552** | | |
    | **CWE-600** | | |
    | **CWE-693** | | |
    | **CWE-754** | | |
    | **CWE-755** | | |
    | **CWE-923** | | |
    | **CWE-942** | | |
    | **CWE-1008** | | |
    | **CWE-1174** | | |
    | **CWE-1188** | | |
    | **CWE-1295** | | |
    | **CWE-1300** | | |
    | **CWE-1386** | | |
