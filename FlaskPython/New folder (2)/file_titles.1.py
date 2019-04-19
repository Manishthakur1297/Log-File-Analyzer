titles = {
    'HDFS': {
        'log_format': '<Date> <Time> <Pid> <Level> <Component>: <Content>',
        'regex': [r'blk_-?\d+', r'(\d+\.){3}\d+(:\d+)?']
        },

    'Hadoop': {
        'log_format': '<Date> <Time> <Level> \[<Process>\] <Component>: <Content>', 
        'regex': [r'(\d+\.){3}\d+']     
        },

    'Spark': {
        'log_format': '<Date> <Time> <Level> <Component>: <Content>', 
        'regex': [r'(\d+\.){3}\d+', r'\b[KGTM]?B\b', r'([\w-]+\.){2,}[\w-]+']
        },

    'Zookeeper': {
        'log_format': '<Date> <Time> - <Level>  \[<Node>:<Component>@<Id>\] - <Content>',
        'regex': [r'(/|)(\d+\.){3}\d+(:\d+)?']
        },

    'BGL': {
        'log_format': '<Label> <Timestamp> <Date> <Node> <Time> <NodeRepeat> <Type> <Component> <Level> <Content>',
        'regex': [r'core\.\d+']  
        },

    'HPC': {
        'log_format': '<LogId> <Node> <Component> <State> <Time> <Flag> <Content>',
        'regex': [r'=\d+']
        },

    'Thunderbird': {
        'log_format': '<Label> <Timestamp> <Date> <User> <Month> <Day> <Time> <Location> <Component>(\[<PID>\])?: <Content>',
        'regex': [r'(\d+\.){3}\d+']   
        },

    'Windows': {
        'log_format': '<Date> <Time>, <Level>                  <Component>    <Content>',
        'regex': [r'0x.*?\s']
        },

    'Linux': {
        'log_format': '<Month> <Date> <Time> <Level> <Component>(\[<PID>\])?: <Content>',
        'regex': [r'(\d+\.){3}\d+', r'\d{2}:\d{2}:\d{2}']  
        },

    'Android': {
        'log_format': '<Date> <Time>  <Pid>  <Tid> <Level> <Component>: <Content>',
        'regex': [r'(/[\w-]+)+', r'([\w-]+\.){2,}[\w-]+', r'\b(\-?\+?\d+)\b|\b0[Xx][a-fA-F\d]+\b|\b[a-fA-F\d]{4,}\b']
        },

    'HealthApp': {
        'log_format': '<Time>\|<Component>\|<Pid>\|<Content>',
        'regex': []
        },

    'Apache': {
        'log_format': '\[<Time>\] \[<Level>\] <Content>',
        'regex': [r'(\d+\.){3}\d+']
        },

    'Proxifier': {
        'log_format': '\[<Time>\] <Program> - <Content>',
        'regex': [r'<\d+\ssec', r'([\w-]+\.)+[\w-]+(:\d+)?', r'\d{2}:\d{2}(:\d{2})*', r'[KGTM]B']
        },

    'OpenSSH': {
        'log_format': '<Date> <Day> <Time> <Component> sshd\[<Pid>\]: <Content>',
        'regex': [r'(\d+\.){3}\d+', r'([\w-]+\.){2,}[\w-]+']
        },

    'OpenStack': {
        'log_format': '<Logrecord> <Date> <Time> <Pid> <Level> <Component> \[<ADDR>\] <Content>',
        'regex': [r'((\d+\.){3}\d+,?)+', r'/.+?\s', r'\d+']
        },

    'Mac': {
        'log_format': '<Month>  <Date> <Time> <User> <Component>\[<PID>\]( \(<Address>\))?: <Content>',
        'regex': [r'([\w-]+\.){2,}[\w-]+']
        },

    'W3C Extended' : {
        'log_format': ['date', 'time', 'c-ip', 'c-port', 'cs-username', 'cs-method', 'cs-uri-stem', 'cs-uri-query', 'sc-status', 'sc-bytes', 'cs-bytes', 's-name', 's-port'],
        #'log_format': ['Time', 'Client IP Address', 'Method', 'URI Stem', 'HTTP Status', 'HTTP Version'],
        'regex': [r'[\S]+']
    },

    'NCSA Common' : {
        
        'log_format': ['Host', 'Identity', 'Authuser', 'Date', 'Request', 'Status', 'Bytes'],
        'regex': [r'[\S]+']

    },

    'NCSA Combined' : {
        
        'log_format': ['Host', 'Identity', 'Authuser', 'Date', 'Request', 'Status', 'Bytes', 'Referrer', 'User Agent', 'Cookie'],
        'regex': [r'[\S]+']

    },

    'Microsoft IIS' : {
        'log_format': ['date', 'time', 'c-ip', 'cs-username','s-ip', 'cs-method', 'cs-uri-stem', 'cs-uri-query', 'sc-status', 'sc-bytes', 'cs-bytes', 'time-taken', 'cs-version', 'cs(User-Agent)', 'cs(Cookie)', 'cs(Referrer)'],
        'regex': [r'[\S]+']
    },

    'Others': {
    'log_format': ['Component1', 'Component2', 'Component3','Component4'],
    'regex': [r'[\S]+']
    }
}