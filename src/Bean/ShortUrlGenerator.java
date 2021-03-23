package Bean;

public class ShortUrlGenerator {
/**
     * @param args
     */
    public static void main(String[] args) {
        String sLongUrl = "https://www.baidu.com/s?wd=%E7%9F%AD%E7%BD%91%E5%9D%80%E9%9C%80%E8%A6%81%E6%95%B0%E6%8D%AE%E5%BA%93%E5%90%97&rsv_spt=1&rsv_iqid=0xfc3b053a000113e0&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=%25E7%259F%25AD%25E5%259F%259F%25E5%2590%258D%25E6%259C%258D%25E5%258A%25A1%25E5%2599%25A8%25E7%259A%2584%25E5%258E%259F%25E7%2590%2586%25E6%2598%25AF%25E4%25BB%2580%25E4%25B9%2588&rsv_btype=t&inputT=8660&rsv_t=72faFYE2aES09Ga3swUcKZEKfSttVeCquuL0Gbq%2B87aMZXRqNbxLL5qFmQvE0ugAv7m0&rsv_sug3=77&rsv_pq=adba114c0000f3f2&rsv_sug1=32&rsv_sug7=100&rsv_sug2=0&rsv_sug4=9513"; //������
        String[] aResult = shortUrl(sLongUrl);
// ��ӡ�����
        for (int i = 0; i < aResult.length; i++) {
            System.out.println("[" + i + "]:::" + aResult[i]);
        }
    }

public static String[] shortUrl(String url) {
// �����Զ������� MD5 �����ַ���ǰ�Ļ�� KEY
        String key = "dreamfly";
// Ҫʹ������ URL ���ַ�
        String[] chars = new String[]{"a", "b", "c", "d", "e", "f", "g", "h",
                "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
                "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H",
                "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                "U", "V", "W", "X", "Y", "Z"
        };
// �Դ�����ַ���� MD5 ����
        String sMD5EncryptResult = (MD5Utils.encode(key + url));
        String hex = sMD5EncryptResult;
        String[] resUrl = new String[4];
        for (int i = 0; i < 4; i++) {
// �Ѽ����ַ����� 8 λһ�� 16 ������ 0x3FFFFFFF ����λ������ 
            String sTempSubString = hex.substring(i * 8, i * 8 + 8);
// ������Ҫʹ�� long ����ת������Ϊ Inteper .parseInt() ֻ�ܴ��� 31 λ , ��λΪ����λ , ������� long �����Խ�� 
            long lHexLong = 0x3FFFFFFF & Long.parseLong(sTempSubString, 16);
            String outChars = "";
            for (int j = 0; j < 6; j++) {
// �ѵõ���ֵ�� 0x0000003D ����λ�����㣬ȡ���ַ����� chars ���� 
                long index = 0x0000003D & lHexLong;
// ��ȡ�õ��ַ���� 
                outChars += chars[(int) index];
// ÿ��ѭ����λ���� 5 λ 
                lHexLong = lHexLong >> 5;
            }
// ���ַ��������Ӧ�������������
            resUrl[i] = outChars;
        }
return resUrl;
    }
}