titles = {
    'HDFS': {
        'log_format': '<Date> <Time> <Pid> <Level> <Component>: <Content>'
        },

    'Hadoop': {
        'log_format': '<Date> <Time> <Level> \[<Process>\] <Component>: <Content>'
        },

    'Spark': {
        'log_format': '<Date> <Time> <Level> <Component>: <Content>'
        },

    'Zookeeper': {
        'log_format': '<Date> <Time> - <Level>  \[<Node>:<Component>@<Id>\] - <Content>'
        },

    'BGL': {
        'log_format': '<Label> <Timestamp> <Date> <Node> <Time> <NodeRepeat> <Type> <Component> <Level> <Content>'
        },

    'HPC': {
        'log_format': '<LogId> <Node> <Component> <State> <Time> <Flag> <Content>'
        },

    'Thunderbird': {
        'log_format': '<Label> <Timestamp> <Date> <User> <Month> <Day> <Time> <Location> <Component>(\[<PID>\])?: <Content>'
        },

    'Windows': {
        'log_format': '<Date> <Time> <Level>                  <Component>    <Content>'
        },

    'Linux': {
        'log_format': '<Month> <Date> <Time> <Level> <Component>(\[<PID>\])?: <Content>'
        },

    'Android': {
        'log_format': '<Date> <Time>  <Pid>  <Tid> <Level> <Component>: <Content>'
        },

    'HealthApp': {
        'log_format': '<Time>\|<Component>\|<Pid>\|<Content>'
        },

    'Apache': {
        'log_format': '\[<Time>\] \[<Level>\] <Content>'
        },

    'Proxifier': {
        'log_format': '\[<Time>\] <Program> - <Content>'
        },

    'OpenSSH': {
        'log_format': '<Date> <Day> <Time> <Component> sshd\[<Pid>\]: <Content>'
        },

    'OpenStack': {
        'log_format': '<Logrecord> <Date> <Time> <Pid> <Level> <Component> \[<ADDR>\] <Content>'
        },

    'Mac': {
        'log_format': '<Month>  <Date> <Time> <User> <Component>\[<PID>\]( \(<Address>\))?: <Content>'
        },

    'W3C Extended' : {
        'log_format': '<date> <time> <c-ip> <c-port> <cs-username> <cs-method> <cs-uri-stem> <cs-uri-query> <sc-status> <sc-bytes> <cs-bytes> <s-name> <s-port>'
        #'log_format': ['Time', 'Client IP Address', 'Method', 'URI Stem', 'HTTP Status', 'HTTP Version']
    },

    'NCSA Common' : {
        
        'log_format': '<Host> <Identity> <Authuser> \[<Date>\] \\\<Request>\\\ <Status> <Bytes>'

    },

    'NCSA Combined' : {
        
        'log_format': '<Host> <Identity> <Authuser> \[<Date>\] \\\<Request>\\\ <Status> <Bytes> \\\<Referrer>\\\ \\\<User_Agent>'#<Cookie>'

    },

    'Microsoft IIS' : {
                #Fields: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) cs(Referer) sc-status sc-substatus sc-win32-status time-taken
        # 'log_format': '<date> <time> <s-ip> <cs-method> <cs-uri-stem> <cs-uri-query> <s-port> <cs-username> <c-ip> <cs(User-Agent)> <cs(Referrer)> <sc-status> <sc-substatus> <sc-win32-status> <time-taken>'
        'log_format': '<date> <time> <c_ip> <cs_username> <s_ip> <cs_method> <cs_uri_stem> <cs_uri_query> <sc_status> <sc_bytes> <cs_bytes> <time_taken> <cs_version> <cs_User_Agent> <cs_Cookie> <cs_Referrer>'
    },

    'Others': {
    'log_format': ['Component1', 'Component2', 'Component3','Component4'],
    'regex': [r'[\S]+']
    },

    'Error': {
        'log_format':'\[<Time>\] \[<Level>\] \[<Address>\] <Content>'
    },

    'Log4j' : 
    {
        #'log_format':'<Time>-<Thread>--<Level>-<Logger>:<Content>'
        'log_format':'<Time> \[<Thread>\] <Level> <Logger> - <Content>'
    },
}