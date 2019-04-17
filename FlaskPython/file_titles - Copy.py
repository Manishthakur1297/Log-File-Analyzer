titles = {

    'Windows': {
        'log_format': ['Date', 'Time', 'Level','Component','Content'],
        'regex': [r'[\S]+']
        },

    'Android': {
        'log_format': ['Date', 'Time', 'Pid', 'Tid', 'Level','Component','Content'],
        'regex': [r'[\S]+']
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

    'HDFS': {
        'log_format': ['Date', 'Time','Pid', 'Level','Component','Content'],
        'regex': [r'[\S]+']
        },

    'Hadoop': {
        'log_format': ['Date', 'Time', 'Level','Process', 'Component','Content'],
        'regex': [r'[\S]+']
        },

    'Spark': {
        'log_format': ['Date', 'Time', 'Level','Content'],
        'regex': [r'[\S]+']
        },

    'BGL': {
        'log_format': ['Label', 'Timestamp', 'Date', 'Node', 'Time', 'NodeRepeat', 'Type', 'Component', 'Level','Content'],
        'regex': [r'[\S]+']
        },

    'HPC': {
        'log_format': ['LogId', 'Node', 'Component', 'State', 'Time', 'Flag', 'Content'],
        'regex': [r'[\S]+']
        },

    'Thunderbird': {
        'log_format': ['Label', 'Timestamp', 'Date', 'User','Month','Day', 'Time', 'Location', 'Component', 'Content'],
        'regex': [r'[\S]+']
        },


    'Linux': {
        'log_format': ['Month', 'Date', 'Time', 'Level', 'Component', 'PID', 'Content'],
        'regex': [r'[\S]+']
        },

    'HealthApp': {
        'log_format': ['Time', 'Component', 'Pid', 'Content'],
        'regex': [r'[\S]+']
        },

    'Apache': {
        'log_format': ['Day', 'Month', 'Date', 'Time', 'Year', 'Level','Content'],
        'regex': [r'[\S]+']
        },

    'Proxifier': {
        'log_format': ['Date', 'Time','Program', 'Content'],
        'regex': [r'[\S]+']
        },

    'OpenSSH': {
        'log_format': [ 'Date', 'Day', 'Time', 'Component', 'Pid','Content'],
        'regex': [r'[\S]+']
        },

    'OpenStack': {
        'log_format': ['Logrecord', 'Date', 'Time', 'Pid', 'Level', 'Component', 'ADDR','Content'],
        'regex': [r'[\S]+']
    },

    'Mac': {
        'log_format': ['Month', 'Date', 'Time', 'User', 'Component', 'PID', 'Address', 'Content'],
        'regex': [r'[\S]+']
        },

        'Others': {
        'log_format': ['Component1', 'Component2', 'Component3','Component4'],
        'regex': [r'[\S]+']
        }
}
